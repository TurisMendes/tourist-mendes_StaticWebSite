import { API_CONFIG } from "../config";
import { axiosInstance } from "../axios-instance";
import { ResponseDTO, TrilhasHomeCard } from "../../shared-lib/typesHomePage";
import { mockTrails } from "./mock";
import axios from "axios";

export const getTrails = async (): Promise<ResponseDTO<TrilhasHomeCard[]>> => {
  if (API_CONFIG.USE_MOCKS) {
    return new Promise((resolve) =>
      setTimeout(
        () =>
          resolve({
            message: "Trilhas carregadas com sucesso!",
            status: 200,
            dataType: "Trilhas",
            data: mockTrails,
          }),
        500
      )
    );
  }

  try {
    const response = await axiosInstance.get<TrilhasHomeCard[]>("/trails");
    return {
      message: "Trilhas carregadas com sucesso!",
      status: response.status,
      dataType: 'TRILHAS',
      data: response.data,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw {
        data: null,
        status: error.response?.status || 500,
        message: error.message,
      };
    }
    throw error;
  }
};
