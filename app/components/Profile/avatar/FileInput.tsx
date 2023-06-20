import React, { useState } from 'react';
import styles from './FileInput.module.scss'
import { useActions } from '@/app/hooks/useActions';


type Props = {
    onChange: (file: File) => void;
    accept: string;
};

const FileInputComponent: React.FC<Props> = ({ onChange, accept }) => {
    const [fileName, setFileName] = useState<string>('');
    const {setChangeProfileAvatar} = useActions()
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { files } = event.target;

        if (files && files.length > 0) {
            const selectedFile = files[0];
            setFileName(selectedFile.name);
            setChangeProfileAvatar(false)
            switch (selectedFile.type){
                case 'image/png':return onChange(selectedFile);
                case 'image/jpeg':return onChange(selectedFile);
                case 'image/jpg':return onChange(selectedFile);
                default:return setChangeProfileAvatar(true)
            }

        }
    };

    return (
        <div className={styles.FileInputContainer}>
            <input className={styles.FileInput} type="file" onChange={handleFileChange} accept={accept} />
            {fileName===''?<span>Choose file</span>:<div></div>}

            <span className={styles.FileName}>{fileName}</span>
        </div>
    );
};

export default FileInputComponent;