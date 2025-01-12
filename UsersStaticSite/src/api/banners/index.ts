import { API_CONFIG } from '../config';
import { axiosInstance } from '../axios-instance';
import { HomeBanner, ResponseDTO } from '../../shared-lib/typesHomePage';
import { mockBanners } from './mock';
import axios from 'axios';

export const getBanners = async (): Promise<ResponseDTO<HomeBanner[]>> => {
  if (API_CONFIG.USE_MOCKS) {
    return new Promise((resolve) => 
      setTimeout(() => 
        resolve({
          data: mockBanners,
          status: 200,
          message: 'Banners carregados com sucesso!',
          dataType: 'BANNERS'
        }), 
        500
      )
    );
  }

  try {
    const response = await axiosInstance.get<HomeBanner[]>('/banners');
    return {
      data: response.data,
      status: response.status,
      message: 'Banners carregados com sucesso!',
      dataType: 'BANNERS'
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