import { useState, useEffect } from 'react';
import axios from 'axios';

const normalizeLocale = (value: string): string => value.trim().replace('_', '-');

const localeCandidates = (storedLocale: string): string[] => {
    const normalized = normalizeLocale(storedLocale || 'es-mx');
    const parts = normalized.split('-');
    const language = parts[0]?.toLowerCase() || 'es';
    const region = parts[1]?.toUpperCase();
    const canonical = region ? `${language}-${region}` : language;

    return Array.from(new Set([
        normalized,
        canonical,
        language,
        'es',
        'en',
    ]));
};

/**
 * A React hook that fetches data from the API with the given URL and 
 * returns an object with `data`, `loading`, and `error` properties.
 * 
 * The `data` property is the response data from the API, or `null` if the 
 * request is still pending or if there was an error.
 * 
 * The `loading` property is a boolean indicating whether the request is 
 * still pending.
 * 
 * The `error` property is a string indicating an error message if there was 
 * an error, or `null` if there was no error.
 * 
 * The hook uses the `axios` library to send a GET request to the API with the 
 * given URL and the `populate=deep` and `locale=<current language>` query 
 * parameters. The current language is obtained from localStorage or defaults 
 * to 'es-mx'.
 * 
 * @param {string} url The URL of the API resource to fetch.
 * @returns {{ data: T | null, loading: boolean, error: string | null }}
 */
export function useFetchData<T>(url: string): { data: T | null, loading: boolean, error: string | null } {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchData() {
            const baseUrl = (import.meta.env.VITE_APP_BASE_URL || '').replace(/\/$/, '');
            const endpoint = `${baseUrl}/${url.replace(/^\//, '')}`;
            const languagesToTry = localeCandidates(localStorage.getItem('language') || 'es-mx');

            try {
                let lastError: unknown = null;

                for (let index = 0; index < languagesToTry.length; index += 1) {
                    const language = languagesToTry[index];

                    try {
                        const response = await axios.get<T>(endpoint, {
                            params: { populate: 'deep', locale: language },
                        });
                        setData(response.data);
                        setError(null);
                        return;
                    } catch (err) {
                        lastError = err;

                        const statusCode = axios.isAxiosError(err) ? err.response?.status : undefined;
                        const canRetryLocale = (statusCode === 404 || statusCode === 400) && index < languagesToTry.length - 1;

                        if (!canRetryLocale) {
                            throw err;
                        }
                    }
                }

                throw lastError;
            } catch (err) {
                const statusCode = axios.isAxiosError(err) ? err.response?.status : undefined;
                const apiMessage = axios.isAxiosError(err)
                    ? err.response?.data?.error?.message || err.message
                    : err instanceof Error
                        ? err.message
                        : String(err);

                setError(
                    `Fetch failed for ${endpoint} (populate=deep). ` +
                    `Locales tried: [${languagesToTry.join(', ')}]. ` +
                    `${statusCode ? `HTTP ${statusCode}. ` : ''}` +
                    `${apiMessage}`
                );
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [url]);

    return { data, loading, error };
}
