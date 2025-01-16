import {
  AtracaoLocalHomeCard,
  ResponseDTO,
} from "../../shared-lib/typesHomePage";
import axios from "axios";
import { axiosInstance } from "../axios-instance";

export const getAttractions = async (): Promise<
  ResponseDTO<AtracaoLocalHomeCard[]>
> => {
  try {
    const response = await axiosInstance.get<AtracaoLocalHomeCard[]>(
      "/mockAttractions.json"
    );
    return {
      data: response.data,
      status: response.status,
      message: "Success",
      dataType: "ATRAÇÕES",
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        data: [],
        status: error.response?.status || 500,
        message: error.message,
        dataType: "ATRAÇÕES",
      };
    }
    return {
      data: [],
      status: 500,
      message: "An unexpected error occurred",
      dataType: "ATRAÇÕES",
    };
  }
};
