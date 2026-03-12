import { useState } from 'react';
import { DataContactInterface, sendFileInContactForm } from './services/ContactRequest';

export interface FormData {
    name: string;
    email: string;
    message?: string;
    cv?: File | null;
    agreement?: string;
    phone?: string;
    lastname?: string;
}

const useContactForm = (initialData: FormData, requiredFields?: string[], url?: string) => {

    const [formData, setFormData] = useState<FormData>(initialData);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [successApi, setSuccessApi] = useState<boolean>(false);
    const [errorApi, setErrorApi] = useState<boolean>(false);

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value, type } = event.target;
        if (type === 'file') {
            const files = (event.target as HTMLInputElement).files;
            setFormData({ ...formData, [name]: files ? files[0] : null });
        } else {
            setFormData({ ...formData, [name]: value });
        }
        setErrors({ ...errors, [name]: '' });
    };

    const validateName = (name: string) => {
        if (!name.trim()) {
            return 'El nombre es obligatorio.';
        }
        return null;
    };

    const validateLastName = (lastname: string) => {
        if (!lastname.trim()) {
            return 'El apellido es obligatorio.';
        }
        return null;
    };

    const validatePhone = (phone: string) => {
        const phonePattern = /^\(\d{2}\) \d{4} \d{4}$/;
        if (!phone.trim() && !phonePattern.test(phone)) {
            return 'El teléfono es obligatorio.';
        }

        return null;
    };

    const validateEmail = (email: string) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.trim()) {
            return 'El correo electrónico es obligatorio.';
        } else if (!emailPattern.test(email)) {
            return 'Formato de correo electrónico no válido.';
        }
        return null;
    };

    const validateMessage = (message: string | undefined) => {
        if (!message?.trim()) {
            return 'El mensaje es obligatorio.';
        }
        return null;
    };

    const validateCV = (cv: File | null | undefined) => {
        if (!cv) {
            return 'El CV es obligatorio.';
        }
        return null;
    };

    const validateAgreement = (agreement: string | undefined) => {
        if (!agreement) {
            return 'Selecciona un convenio.';
        }
        return null;
    };

    const validate = (): boolean => {
        const newErrors: Record<string, string> = {};
        let isValid = true;

        requiredFields?.forEach((field) => {
            let error: string | null = null;
            switch (field) {
                case 'name':
                    error = validateName(formData.name);
                    break;
                case 'lastname':
                    error = validateLastName(formData.lastname || '');
                    break;
                case 'email':
                    error = validateEmail(formData.email);
                    break;
                case 'phone':
                    error = validatePhone(formData.phone || '');
                    break;
                case 'message':
                    error = validateMessage(formData.message);
                    break;
                case 'cv':
                    error = validateCV(formData.cv);
                    break;
                case 'agreement':
                    error = validateAgreement(formData.agreement);
                    break;
                default:
                    break;
            }

            if (error) {
                newErrors[field] = error;
                isValid = false;
            }
        });

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>, token: string | undefined) => {
        event.preventDefault();

        if (validate()) {
            const sendData = {
                name: formData.name,
                email: formData.email,
                message: formData.message,
                token,
            } as DataContactInterface;

            if (formData.cv) {
                sendData.file = formData.cv;
            }

            if (formData.lastname) {
                sendData.lastname = formData.lastname;
            }

            if (formData.phone) {
                sendData.phone = formData.phone.replace(/\D/g, '');
            }

            if (formData.agreement) {
                sendData.agreement = formData.agreement;
            }

            const response = await sendFileInContactForm(sendData, url || '');

            if (response) {
                setErrorApi(false);
                setSuccessApi(true);
                setFormData(initialData);
                setErrors({});
                setFormData(prev => ({ ...prev, cv: null }));
                return true
            }

            setErrorApi(true);
            setSuccessApi(false);
            return false
        }
    };

    return {
        formData,
        errors,
        successApi,
        errorApi,
        handleInputChange,
        handleSubmit,
    };
};

export default useContactForm;
