import {
  AtracaoLocalHomeCard,
  ResponseDTO,
} from "../../shared-lib/typesHomePage";
import axios, { AxiosError } from "axios";

export const getAttractions = async () => {
  try {
    const axiosInstance = axios.create({
      baseURL: "",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const response = await axiosInstance.get<
      ResponseDTO<AtracaoLocalHomeCard[]>
    >("/mockAttractions.json");

    return response.data;
  } catch (error) {
    const errorResponse: ResponseDTO<AtracaoLocalHomeCard[]> = {
      message:
        error instanceof AxiosError
          ? error.message
          : "Erro ao carregar atrações",
      status: error instanceof AxiosError ? error.response?.status ?? 500 : 500,
      dataType: "ATRAÇÕES",
      data: [],
    };

    return errorResponse
  }
};
