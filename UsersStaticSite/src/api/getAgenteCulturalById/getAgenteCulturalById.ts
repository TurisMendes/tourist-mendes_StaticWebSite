import { BASE_URL_API } from "../../globalConstants";
import FullAgenteCulturalType from "../../shared-lib/FullAgenteCulturalType";
import { ResponseDTO } from "../../shared-lib/typesHomePage";
import axios from "axios";

export const getCulturalAgentById = async (id: string | undefined) => {
  // Atention this end point are not finished by backend
  try {
    const axiosInstance = axios.create({
      baseURL: BASE_URL_API,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const response = await axiosInstance.get<ResponseDTO<FullAgenteCulturalType>>(
      `/agentecultural/${id}`
    );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        const statusCode = error.response.status;
        switch (statusCode) {
          case 400:
            console.error(
              "Requisição inválida: O servidor não conseguiu entender a requisição."
            );
            break;
          case 404:
            console.error("Não encontrado: O evento solicitado não existe.");
            break;
          case 422:
            console.error("Erro ao carregar dados!");
            break;
          case 500:
            console.error(
              "Erro interno do servidor: Houve um problema com o servidor."
            );
            break;
          case 502:
            console.error(
              "Gateway inválido: O servidor recebeu uma resposta inválida de um servidor upstream."
            );
            break;
          case 503:
            console.error(
              "Serviço indisponível: O servidor está temporariamente indisponível."
            );
            break;
          case 504:
            console.error(
              "Timeout do Gateway: O servidor expirou enquanto aguardava uma resposta."
            );
            break;
          default:
            console.error(
              `Erro inesperado: ${statusCode} - ${error.response.data}`
            );
        }
      } else if (error.request) {
        console.error("Nenhuma resposta recebida do servidor.");
      } else {
        console.error("Erro ao configurar a requisição:", error.message);
      }
    } else {
      console.error("Ocorreu um erro inesperado:", error);
    }
    throw new Error("Falha ao buscar os dados do evento.");
  }
};
