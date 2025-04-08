import { BASE_URL_API } from "../../globalConstants";
import {
  AgenteCulturalHomeCard,
  ResponseDTO,
} from "../../shared-lib/typesHomePage";
import axios, { AxiosError } from "axios";

export const getAgents = async () => {
  try {
    const axiosInstance = axios.create({
      baseURL: BASE_URL_API,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    const response = await axiosInstance.get<ResponseDTO<AgenteCulturalHomeCard[]>>(
      "/home/agenteCultural"
    )

    return response.data;

  } catch (error) {
     const errorResponse: ResponseDTO<AgenteCulturalHomeCard[]> = {
        message:
          error instanceof AxiosError
            ? error.message
            : "Erro ao carregar agentes",
        status: error instanceof AxiosError ? error.response?.status ?? 500 : 500,
        dataType: "AGENTES",
        data: [],
      };
  
      return errorResponse
  }
};
