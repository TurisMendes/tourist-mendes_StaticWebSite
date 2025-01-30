import FullAtracaoLocalType from "../../shared-lib/FullAtracaoLocalType";
import { ResponseDTO } from "../../shared-lib/typesHomePage";
import axios, { AxiosError } from "axios";

export const getAttractionById = async (id: string) => {
  try {
    const response = await axios.get<ResponseDTO<FullAtracaoLocalType[]>>(
      "/mockLocalAttraction.json"
    );

    const attractions = response.data.data || [];

    const selectedAttraction = attractions.find((item) => item.id === id);

    if (!selectedAttraction) {
      throw new Error("Attraction not found");
    }

    return {
      ...response.data,
      data: selectedAttraction,
    };

  } catch (error) {
    return {
      message:
        error instanceof AxiosError ? error.message : "Erro ao carregar atração local",
      status: error instanceof AxiosError ? error.response?.status ?? 500 : 500,
      dataType: "ATRAÇÃO LOCAL",
      data: null,
    };
  }
};
