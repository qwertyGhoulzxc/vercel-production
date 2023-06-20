import {FC, useEffect, useState} from 'react'
import {SubmitHandler, useForm} from 'react-hook-form'
import {IFormFields, IFormProps, IInputType, TypeChooseLogin} from './form.interfaces'
import styles from './From.module.scss'
import PhoneInputField from './inputs/PhoneInputBy'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {useAppDispatch, useAppSelector} from '@/app/hooks/redux'
import {changePassword, login, registration, SendLink} from '@/app/redux/reducers/requests'

const Form: FC<IFormProps> = ({IFormState, title}) => {
    const dispatch = useAppDispatch()

    const {query, push} = useRouter()
    const linkParams = Object.keys(query)

    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
        control,
        getValues
    } = useForm<IFormFields>({mode: 'onChange'})

    const [inputTypePassword, setInputTypePassword] = useState<IInputType>('password')

    const [chooseLogin, setChooseLogin] = useState<TypeChooseLogin>('PhoneNumber')

    const {
        ChangePassError,
        RegistrError,
        LoginError,
        SendLinkError,
        isAuth
    } = useAppSelector(state => state.UserInfoReducer)


    const onSubmit: SubmitHandler<IFormFields> = async (data) => {
        console.log(data);
        if (IFormState === 'registration') {
            await dispatch(registration(data.number, data.password, data.email))

        } else if (IFormState === 'login') {
            await dispatch(login(data.number, data.password, data.email))


        } else if (IFormState === 'ChangePassByLink') {
            dispatch(SendLink(data.email, data.number))
        } else if (IFormState === 'ChangePassWithParams') {
            dispatch(changePassword(linkParams[0], data.password))
            push('/issucceschangepassword')

        }

        if (RegistrError.status < 400 || LoginError.status < 400 || ChangePassError.status < 400 || SendLinkError.status < 400) {
            reset({
                email: '',
                number: '375',
                password: '',
                confirmPassword: ''
            })
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (LoginError.status === 200 || RegistrError.status == 200) {
                push('/')
                clearInterval(interval)

            }
        }, 1000)


    }, [onSubmit])


    const handleShowPassword = () => {
        inputTypePassword === 'password' ? setInputTypePassword('text') : setInputTypePassword('password')
    }


    if (IFormState === 'registration') {

        return (
            <div className={styles.content}>

                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <h2>{title}</h2>
                    <input
                        {...register('email',
                            {
                                required: 'заполните поле',
                                pattern: {
                                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message: 'введите правильный email'
                                }
                            })}
                        placeholder='&nbsp;почта'
                        type="text"/>
                    {errors.email && <div className={styles.Error}>{errors.email.message}</div>}

                    <PhoneInputField name='number' control={control}/>
                    {errors.number?.message && <div className={styles.Error}>{errors.number.message}</div>}

                    <div className={styles.PasswordInput}>
                        <input
                            type={inputTypePassword}
                            autoComplete='off'
                            placeholder='&nbsp;пароль'
                            {...register('password', {
                                required: 'заполните поле',
                                minLength: {
                                    value: 8,
                                    message: 'минимум 8 символов',
                                },
                                maxLength: {
                                    value: 32,
                                    message: 'максимум 32 символов',
                                },
                                validate: password => {
                                    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,32}$/;
                                    return passwordRegex.test(password);
                                }
                            })} />
                        <svg style={inputTypePassword === 'password' ? {fill: '#011F7F'} : {fill: 'red'}}
                             onClick={handleShowPassword} viewBox="0 0 24 24">
                            <path
                                d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6z"></path>
                        </svg>
                        {errors?.password && <div
                            className={styles.Error}>{String(errors?.password?.message) || 'ошибка при валидации'}</div>}
                    </div>

                    <input
                        type={inputTypePassword}
                        placeholder='&nbsp;подтвердите пароль'
                        autoComplete='off'
                        {...register('confirmPassword', {
                            required: 'заполните поле',
                            validate: (value) => value === getValues('password') || 'пароли не совпадают',
                        })}
                    />
                    {errors?.confirmPassword && <div className={styles.Error}>{errors?.confirmPassword?.message}</div>}

                    {RegistrError.status >= 400 &&
                        <div style={{marginTop: "-5px"}} className={styles.Error}>{RegistrError.message}</div>}
                    <button>Отправить</button>

                    <div className={styles.links}>
                        <Link href={'/login'}><p>Войти в существующий аккаунт</p></Link>
                        <Link href={'/forgotPass'}><p>Забыли пароль?</p></Link>
                    </div>

                </form>
            </div>
        )
    }


    if (IFormState == 'ChangePassByLink') {
        return (<div className={styles.content}>

                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <h2>{title}</h2>

                    <div className={styles.ChooseWay}>
                        <button onClick={() => {
                            setChooseLogin('PhoneNumber')
                        }} style={chooseLogin === 'PhoneNumber' ? {
                            width: '100px',
                            margin: "0 0px 0 100px",
                            borderBottomColor: "#011F7F"
                        } : {width: '100px', margin: "0 0px 0 100px", borderBottomColor: "transparent"}}
                                className={styles.btnChooseWay}>телефон
                        </button>

                        <button onClick={() => {
                            setChooseLogin('Email')
                        }} style={chooseLogin === 'Email' ? {
                            width: '70px',
                            margin: "0 40px 0 20px",
                            borderBottomColor: "#011F7F"
                        } : {width: '70px', margin: "0 40px 0 20px", borderBottomColor: "transparent"}}
                                className={styles.btnChooseWay}>почта
                        </button>

                    </div>
                    {chooseLogin === 'PhoneNumber' ? <>


                            <PhoneInputField name='number' control={control}/>
                            {errors.number?.message && <div className={styles.Error}>{errors.number.message}</div>}
                        </>
                        : <>
                            <input
                                {...register('email',
                                    {
                                        required: 'заполните поле',
                                        pattern: {
                                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                            message: 'введите правильный email'
                                        }
                                    })}
                                placeholder='&nbsp;почта'
                                type="text"/>
                            {errors.email && <div className={styles.Error}>{errors.email.message}</div>}
                        </>}
                    <button>Отправить</button>

                    <div className={styles.links}>
                        <Link href={'/login'}><p>Войти в существующий аккаунт</p></Link>
                        <Link href={'/registration'}><p>Создать аккаунт</p></Link>
                    </div>
                </form>
            </div>
        )
    }

    if (IFormState === 'ChangePassWithParams') {

        return (
            <div className={styles.content}>

                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <h2>{title} {`+${linkParams[1]}`}</h2>

                    <div className={styles.PasswordInput}>
                        <input
                            type={inputTypePassword}
                            autoComplete='off'
                            placeholder='&nbsp;пароль'
                            {...register('password', {
                                required: 'заполните поле',
                                minLength: {
                                    value: 8,
                                    message: 'минимум 8 символов',
                                },
                                maxLength: {
                                    value: 32,
                                    message: 'максимум 32 символов',
                                },
                                validate: password => {
                                    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,32}$/;
                                    return passwordRegex.test(password);
                                }
                            })} />
                        <svg style={inputTypePassword === 'password' ? {fill: '#011F7F'} : {fill: 'red'}}
                             onClick={handleShowPassword} viewBox="0 0 24 24">
                            <path
                                d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6z"></path>
                        </svg>
                        {errors?.password && <div
                            className={styles.Error}>{String(errors?.password?.message) || 'ошибка при валидации'}</div>}
                    </div>

                    <input
                        type={inputTypePassword}
                        placeholder='&nbsp;подтвердите пароль'
                        autoComplete='off'
                        {...register('confirmPassword', {
                            required: 'заполните поле',
                            validate: (value) => value === getValues('password') || 'пароли не совпадают',
                        })}
                    />
                    {errors?.confirmPassword && <div className={styles.Error}>{errors?.confirmPassword?.message}</div>}


                    <button>Отправить</button>

                    <div className={styles.links}>
                        <Link href={'/login'}><p>Войти в существующий аккаунт</p></Link>
                        <Link href={'/registration'}><p>Создать аккаунт</p></Link>

                    </div>

                </form>
            </div>
        )
    }


    return (

        <div className={styles.content}>

            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <h2>{title}</h2>

                <div className={styles.ChooseWay}>
                    <button onClick={() => {
                        setChooseLogin('PhoneNumber')
                    }} style={chooseLogin === 'PhoneNumber' ? {
                        width: '100px',
                        margin: "0 0px 0 100px",
                        borderBottomColor: "#011F7F"
                    } : {width: '100px', margin: "0 0px 0 100px", borderBottomColor: "transparent"}}
                            className={styles.btnChooseWay}>телефон
                    </button>

                    <button onClick={() => {
                        setChooseLogin('Email')
                    }} style={chooseLogin === 'Email' ? {
                        width: '70px',
                        margin: "0 40px 0 20px",
                        borderBottomColor: "#011F7F"
                    } : {width: '70px', margin: "0 40px 0 20px", borderBottomColor: "transparent"}}
                            className={styles.btnChooseWay}>почта
                    </button>

                </div>
                {chooseLogin === 'PhoneNumber' ? <>


                        <PhoneInputField name='number' control={control}/>
                        {errors.number?.message && <div className={styles.Error}>{errors.number.message}</div>}

                        <div className={styles.PasswordInput}>
                            <input
                                type={inputTypePassword}
                                autoComplete='off'
                                placeholder='&nbsp;пароль'
                                {...register('password', {
                                    required: 'заполните поле',
                                    minLength: {
                                        value: 8,
                                        message: 'минимум 8 символов',
                                    },
                                    maxLength: {
                                        value: 32,
                                        message: 'максимум 32 символов',
                                    },
                                    validate: password => {
                                        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,32}$/;
                                        return passwordRegex.test(password);
                                    }
                                })} />
                            <svg style={inputTypePassword === 'password' ? {fill: '#011F7F'} : {fill: 'red'}}
                                 onClick={handleShowPassword} viewBox="0 0 24 24">
                                <path
                                    d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6z"></path>
                            </svg>
                            {errors?.password && <div
                                className={styles.Error}>{String(errors?.password?.message) || 'ошибка при валидации'}</div>}
                        </div>


                    </>
                    : <>
                        <input
                            {...register('email',
                                {
                                    required: 'заполните поле',
                                    pattern: {
                                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                        message: 'введите правильный email'
                                    }
                                })}
                            placeholder='&nbsp;почта'
                            type="text"/>
                        {errors.email && <div className={styles.Error}>{errors.email.message}</div>}

                        <div className={styles.PasswordInput}>
                            <input
                                type={inputTypePassword}
                                autoComplete='off'
                                placeholder='&nbsp;пароль'
                                {...register('password', {
                                    required: 'заполните поле',
                                    minLength: {
                                        value: 8,
                                        message: 'минимум 8 символов',
                                    },
                                    maxLength: {
                                        value: 32,
                                        message: 'максимум 32 символов',
                                    },
                                    validate: password => {
                                        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,32}$/;
                                        return passwordRegex.test(password);
                                    }
                                })} />
                            <svg style={inputTypePassword === 'password' ? {fill: '#011F7F'} : {fill: 'red'}}
                                 onClick={handleShowPassword} viewBox="0 0 24 24">
                                <path
                                    d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6z"></path>
                            </svg>
                            {errors?.password && <div
                                className={styles.Error}>{String(errors?.password?.message) || 'ошибка при валидации'}</div>}
                        </div>

                    </>}
                {LoginError.status >= 400 &&
                    <div style={{marginTop: "-5px"}} className={styles.Error}>{LoginError.message}</div>}
                <button>Отправить</button>

                <div className={styles.links}>
                    <Link href={'/registration'}><p>Создать аккаунт</p></Link>
                    <Link href={'/forgotPass'}><p>Забыли пароль?</p></Link>
                </div>
            </form>
        </div>

    )


}

export default Form