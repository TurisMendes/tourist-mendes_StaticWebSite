import {
  AgenteCulturalHomeCard,
  ResponseDTO,
} from "../../shared-lib/typesHomePage";
import axios from "axios";
import { axiosInstance } from "../axios-instance";

export const getAgents = async (): Promise<
  ResponseDTO<AgenteCulturalHomeCard[]>
> => {
  try {
    const response = await axiosInstance.get<AgenteCulturalHomeCard[]>(
      "/mockAgents.json"
    );
    return {
      data: response.data,
      status: response.status,
      message: "Success",
      dataType: "AGENTES",
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        data: [],
        status: error.response?.status || 500,
        message: error.message,
        dataType: "AGENTES",
      };
    }
    return {
      data: [],
      status: 500,
      message: "An unexpected error occurred",
      dataType: "AGENTES",
    };
  }
};
