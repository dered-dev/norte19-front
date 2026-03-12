import axios from 'axios';

export interface DataContactInterface {
    name: string;
    email: string;
    message?: string;
    file?: File | null;
    agreement?: string;
    phone?: string;
    lastname?: string;
    token?: string;
}

/**
 * Submits a contact form, either as JSON or as a multipart/form-data form,
 * depending on whether a file is included in the form.
 *
 * @param {DataContactInterface} sendData The data to be sent in the form.
 * @param {string} url The URL to which the form should be submitted.
 * @returns {Promise<boolean>} Whether the submission was successful.
 */
export const sendFileInContactForm = async (sendData: DataContactInterface, url: string): Promise<boolean> => {
    try {
        const headers = sendData.file
            ? { 'Content-Type': 'multipart/form-data' }
            : { 'Content-Type': 'application/json' };

        const response = await axios.post(`${import.meta.env.VITE_APP_BASE_URL}/api${url}`, sendData, { headers });
        return response.status === 200;
    } catch (error) {
        console.error('Error submitting the form:', error);
        return false;
    }
};
