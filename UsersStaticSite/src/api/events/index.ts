import { EventHomeCard, ResponseDTO } from "../../shared-lib/typesHomePage";
import axios from "axios";
import { axiosInstance } from "../axios-instance";

export const getEvents = async (): Promise<ResponseDTO<EventHomeCard[]>> => {
  try {
    const response = await axiosInstance.get<EventHomeCard[]>(
      "/mockEvents.json"
    );
    return {
      data: response.data,
      status: response.status,
      message: "Success",
      dataType: "EVENTOS",
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        data: [],
        status: error.response?.status || 500,
        message: error.message,
        dataType: "EVENTOS",
      };
    }
    return {
      data: [],
      status: 500,
      message: "An unexpected error occurred",
      dataType: "EVENTOS",
    };
  }
};
