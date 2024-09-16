import axios, { type AxiosError, type AxiosResponse } from 'axios';

import api from './api';
import { URLS } from '../../shared/constants';

async function request<ResponseType>(
  callback: () => Promise<AxiosResponse<ResponseType>>,
): Promise<{ data: ResponseType | null; error: AxiosError | null }> {
  try {
    const response = await callback();
    return { data: response?.data ?? null, error: null };
  } catch (e) {
    let error: AxiosError | null = null;
    if (axios.isAxiosError(e)) {
      error = e;
    } else {
      error = {
        isAxiosError: false,
        toJSON: () => ({}),
        name: '',
        message: '',
      };
    }
    return { data: null, error };
  }
}

export async function get<ResponseType>(): Promise<{ data: ResponseType | null; error: AxiosError | null }> {
  const url = URLS.API_URL;
  return request(() => api.get<ResponseType>(url));
}
