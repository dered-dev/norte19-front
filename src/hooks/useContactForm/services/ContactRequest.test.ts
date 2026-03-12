import { vi } from 'vitest';
import axios from 'axios';
import { sendFileInContactForm, DataContactInterface } from './ContactRequest';

vi.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('sendFileInContactForm', () => {
    const url = '/contact';
    const baseUrl = import.meta.env.VITE_APP_BASE_URL;
    const sendData: DataContactInterface = {
        name: 'John Doe',
        email: 'johndoe@example.com',
        message: 'Hello, this is a test message.',
        file: null,
        agreement: 'yes',
        phone: '123456789',
        lastname: 'Doe',
        token: 'dummy-token',
    };

    it('should send form data as JSON and return true when request is successful', async () => {
        mockedAxios.post.mockResolvedValueOnce({ status: 200 });

        const result = await sendFileInContactForm(sendData, url);

        expect(result).toBe(true);
        expect(mockedAxios.post).toHaveBeenCalledWith(
            `${baseUrl}/api${url}`,
            sendData,
            { headers: { 'Content-Type': 'application/json' } }
        );
    });

    it('should send form data as multipart/form-data when file is included', async () => {
        const file = new File(['dummy content'], 'test.txt', { type: 'text/plain' });
        const formDataSendData = { ...sendData, file };

        mockedAxios.post.mockResolvedValueOnce({ status: 200 });

        const result = await sendFileInContactForm(formDataSendData, url);

        expect(result).toBe(true);
        expect(mockedAxios.post).toHaveBeenCalledWith(
            `${baseUrl}/api${url}`,
            formDataSendData,
            { headers: { 'Content-Type': 'multipart/form-data' } }
        );
    });

    it('should return false when the request fails', async () => {
        mockedAxios.post.mockRejectedValueOnce(new Error('Network Error'));

        const result = await sendFileInContactForm(sendData, url);

        expect(result).toBe(false);
        expect(mockedAxios.post).toHaveBeenCalledWith(
            `${baseUrl}/api${url}`,
            sendData,
            { headers: { 'Content-Type': 'application/json' } }
        );
    });
});
