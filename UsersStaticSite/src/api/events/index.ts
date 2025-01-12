import { API_CONFIG } from "../config";
import { axiosInstance } from "../axios-instance";
import { EventHomeCard, ResponseDTO } from "../../shared-lib/typesHomePage";
import { mockEvents } from "./mock";
import axios from "axios";

export const getEvents = async (): Promise<ResponseDTO<EventHomeCard[]>> => {
  if (API_CONFIG.USE_MOCKS) {
    return new Promise((resolve) =>
      setTimeout(
        () =>
          resolve({
            data: mockEvents,
            status: 200,
            message: "Eventos carregados com sucesso!",
            dataType: "EVENTOS",
          }),
        500
      )
    );
  }

  try {
    const response = await axiosInstance.get<EventHomeCard[]>("/events");
    return {
      data: response.data,
      status: response.status,
      message: "Eventos carregados com sucesso!",
      dataType: "EVENTOS",
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
