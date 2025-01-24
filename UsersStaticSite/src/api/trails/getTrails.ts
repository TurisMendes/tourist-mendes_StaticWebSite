import { ResponseDTO, TrilhasHomeCard } from "../../shared-lib/typesHomePage";
import axios, { AxiosError } from "axios";

export const getTrails = async () => {
  try {
    const axiosInstance = axios.create({
      baseURL: "",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const response = await axiosInstance.get<ResponseDTO<TrilhasHomeCard[]>>(
      "/mockTrails.json"
    );

    return response.data;
  } catch (error) {
    const errorResponse: ResponseDTO<TrilhasHomeCard[]> = {
      message:
        error instanceof AxiosError
          ? error.message
          : "Erro ao carregar trilhas",
      status: error instanceof AxiosError ? error.response?.status ?? 500 : 500,
      dataType: "TRILHAS",
      data: [],
    };

    return errorResponse;
  }
};
