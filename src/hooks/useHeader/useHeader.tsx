import { create } from 'zustand';
import { AxiosError } from 'axios';
import axios from '../../services/interceptors';
import { ApiResponse } from '../../services/interceptors.interface';
import { HeaderResponse } from './useHeader.interface';
import { AppRoutesEnum } from '../../router/AppRoutes.interface';

interface HeadersState {
  data: ApiResponse<HeaderResponse> | null;
  loading: boolean;
  error: AxiosError | null;
  fetchHeaders: () => Promise<void>;
}

/**
 * Normalize the section name to a valid URL path.
 *
 * @param {string} sectionName - The section name to normalize.
 * @returns {string} The normalized section name.
 */
export const normalizeSectionName = (sectionName: string): string => {
  const normalizedMap: { [key: string]: string } = {
    Home: AppRoutesEnum.HOME,
    'Hotel Management': AppRoutesEnum.HOTEL_MANAGEMENT,
    'Gestion hotelera': AppRoutesEnum.HOTEL_MANAGEMENT,
    Investors: AppRoutesEnum.INVESTORS,
    Inversionistas: AppRoutesEnum.INVESTORS,
    Technology: AppRoutesEnum.TECHNOLOGY,
    Tecnologia: AppRoutesEnum.TECHNOLOGY,
    Restaurants: AppRoutesEnum.RESTAURANTS,
    Restaurantes: AppRoutesEnum.RESTAURANTS,
    Lideres: AppRoutesEnum.LEADERSHIP_TEAM,
    'Leadership Team': AppRoutesEnum.LEADERSHIP_TEAM,
    Contacto: AppRoutesEnum.CONTACT,
    Contact: AppRoutesEnum.CONTACT,
  };
  return (
    normalizedMap[sectionName] || sectionName.toLowerCase().replace(/\s+/g, '-')
  );
};

/**
 * A custom hook that provides access to the header data.
 *
 * @returns {HeadersState} The current state of the header data.
 */
const useHeader = create<HeadersState>((set) => ({
  data: null,
  loading: false,
  error: null,

  fetchHeaders: async () => {
    set({ loading: true, error: null });
    try {
      const language = localStorage.getItem('language') || 'es-mx';

      const response = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/api/header`, {
        params: { populate: 'deep', locale: language },
      });
      set({ data: response.data, loading: false });
    } catch (error: unknown) {
      const axiosError = error as AxiosError;
      set({ error: axiosError, loading: false });
    }
  },
}));

export default useHeader;
