import { ResponseDTO, TrilhasHomeCard } from '../../shared-lib/typesHomePage';
import axios from 'axios';
import { axiosInstance } from '../axios-instance';

export const getTrails = async (): Promise<ResponseDTO<TrilhasHomeCard[]>> => {
  try {
    const response = await axiosInstance.get<TrilhasHomeCard[]>(
      "/mockTrails.json"
    );
    return {
      data: response.data,
      status: response.status,
      message: "Success",
      dataType: "TRILHAS",
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        data: [],
        status: error.response?.status || 500,
        message: error.message,
        dataType: "TRILHAS",
      };
    }
    return {
      data: [],
      status: 500,
      message: "An unexpected error occurred",
      dataType: "TRILHAS",
    };
  }
};
