import React, { useEffect, useRef, useState } from "react";

// ** i18n
import { useTranslation } from 'react-i18next'

// ** Styles
import './FileInput.css';

interface InputProps {
    field: string;
    type: string;
    placeholder?: string;
}

interface FileInputProps {
    input: InputProps;
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    errors: { [key: string]: string };
    cv: File | null; // Add cv prop to track the file input state
}

const FileInput: React.FC<FileInputProps> = ({ input, handleInputChange, errors, cv }) => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [fileName, setFileName] = useState<string | undefined>(undefined);
    const { t } = useTranslation();

    const handleClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click(); // Trigger the click event on the file input
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setFileName(file.name);
        }
        handleInputChange(event);
    };

    // Clear the file name if the cv prop is null
    useEffect(() => {
        if (!cv) {
            setFileName(undefined);
        }
    }, [cv]);

    return (
        <div>
            <input
                type="file"
                name={input.field}
                id={input.field}
                aria-label="input-file"
                onChange={handleFileChange}
                ref={fileInputRef}
                style={{ display: "none" }}
            />

            <div
                onClick={handleClick}
                className="custom-file-div"
            >
                <button
                    type="button"
                    className="btn-file"
                >
                    {t('selectFile')}
                </button>

                <div className="placeholder-file">
                    {fileName || input.placeholder || t('noFileSelected')}
                </div>
            </div>

            {errors[input.field] && (
                <div className="invalid-feedback" style={{ display: "block" }}>
                    {errors[input.field]}
                </div>
            )}
        </div>
    );
};

export default FileInput;
