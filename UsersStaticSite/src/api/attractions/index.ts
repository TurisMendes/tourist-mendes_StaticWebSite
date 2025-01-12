import { API_CONFIG } from '../config';
import { axiosInstance } from '../axios-instance';
import { AtracaoLocalHomeCard, ResponseDTO } from '../../shared-lib/typesHomePage';
import { mockAttractions } from './mock';
import axios from 'axios';

export const getAttractions = async (): Promise<ResponseDTO<AtracaoLocalHomeCard[]>> => {
  if (API_CONFIG.USE_MOCKS) {
    return new Promise((resolve) => 
      setTimeout(() => 
        resolve({
          data: mockAttractions,
          status: 200,
          message: 'Success fetching attractions',
          dataType: 'ATRAÇÕES MOCKADAS'
        }), 
        500
      )
    );
  }

  try {
    const response = await axiosInstance.get<AtracaoLocalHomeCard[]>('/attractions');
    return {
      data: response.data,
      status: response.status,
      message: 'Success',
      dataType: 'ATRAÇÕES'
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