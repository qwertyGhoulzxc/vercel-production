import {FC} from 'react'
import PhoneInputField from "./phoneInput/PhoneInput";
import {SubmitHandler, useForm} from "react-hook-form";
import styles from './userDataForm.module.scss'
import {IUserDataFormState} from "@/app/components/manageOrder/userData/userDataForm/userDataForm.interface";
import {useActions} from "@/app/hooks/useActions";
import {useAppSelector} from "@/app/hooks/redux";

interface Props {
    change: (value: (((prevState: boolean) => boolean) | boolean)) => void
}

const UserDataForm: FC<Props> = ({change}) => {
    const {setBuyerOrder} = useActions()
    const {buyer} = useAppSelector(state => state.ManageOrderSliceReducer)
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
        control,
        getValues
    } = useForm<IUserDataFormState>({mode: 'onChange'})

    const onSubmit: SubmitHandler<IUserDataFormState> = async (data) => {
        console.log(data);
        setBuyerOrder(data)
        change(prevState => !prevState)
        // reset({
        //     email: '',
        //     number: '375',
        //     initials: ''
        // })
    }


    return (
        <div className={styles.rel}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <h2>Укажите покупателя</h2>
                <input defaultValue={buyer.initials} {...register('initials', {
                    required: 'заполните поле',
                    pattern: {
                        value: /^[а-яА-ЯёЁa-zA-Z]+\s+[а-яА-ЯёЁa-zA-Z]+\s+[а-яА-ЯёЁa-zA-Z]+$/,
                        message: 'введите правильные инициалы'
                    }
                })}
                       placeholder='&nbsp;ФИО *'
                />
                {errors.initials && <div className={styles.Error}>{errors.initials.message}</div>}
                <input
                    defaultValue={buyer.email}
                    {...register('email',
                        {
                            required: 'заполните поле',
                            pattern: {
                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: 'введите правильный email'
                            }
                        })}
                    placeholder='&nbsp;Электронная почта *'
                    type="text"/>
                {errors.email && <div className={styles.Error}>{errors.email.message}</div>}

                <PhoneInputField name='number' control={control}/>
                {errors.number?.message && <div className={styles.Error}>{errors.number.message}</div>}
                <p className={styles.info}>Электронная почта нужна, чтобы мы сохранили всю<br/> информацию по заказу в
                    вашем
                    личном кабинете.</p>

                {buyer.initials === '' ? <button className={styles.submit}>Отправить</button> :
                    <button className={styles.edit}>Отредактировать</button>}


            </form>
            {buyer.initials !== '' &&
                <button onClick={() => change(prev => !prev)} className={styles.clear}>Закрыть</button>}
        </div>
    )
}

export default UserDataForm