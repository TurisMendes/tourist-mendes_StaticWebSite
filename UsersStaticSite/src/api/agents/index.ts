import { API_CONFIG } from "../config";
import { axiosInstance } from "../axios-instance";
import {
  AgenteCulturalHomeCard,
  ResponseDTO,
} from "../../shared-lib/typesHomePage";
import { mockAgents } from "./mock";
import axios from "axios";

export const getAgents = async (): Promise<
  ResponseDTO<AgenteCulturalHomeCard[]>
> => {
  if (API_CONFIG.USE_MOCKS) {
    return new Promise((resolve) =>
      setTimeout(
        () =>
          resolve({
            data: mockAgents,
            status: 200,
            message: "Agentes locais carregados com sucesso!",
            dataType: "AGENTES",
          }),
        500
      )
    );
  }

  try {
    const response = await axiosInstance.get<AgenteCulturalHomeCard[]>(
      "/agents"
    );
    return {
      data: response.data,
      status: response.status,
      message: "Agentes locais carregados com sucesso!",
      dataType: "AGENTES",
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
