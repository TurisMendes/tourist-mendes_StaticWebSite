import { API_CONFIG } from '../config';
import { axiosInstance } from '../axios-instance';
import { ResponseDTO, TrilhasHomeCard } from '../../shared-lib/typesHomePage';
import { mockTrails } from './mock';
import axios from 'axios';

export const getTrails = async (): Promise<ResponseDTO<TrilhasHomeCard[]>> => {
  if (API_CONFIG.USE_MOCKS) {
    return new Promise((resolve) => 
      setTimeout(() => 
        resolve({
          data: mockTrails,
          status: 200,
          message: 'Success fetching trails',
          dataType: 'TRILHAS MOCKADAS'
        }), 
        500
      )
    );
  }

  try {
    const response = await axiosInstance.get<TrilhasHomeCard[]>('/trails');
    return {
      data: response.data,
      status: response.status,
      message: 'Success',
      dataType: 'TRILHAS'
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw {
        data: null,
        status: error.response?.status || 500,
        message: error.message
      };
    }
    throw error;
  }
};