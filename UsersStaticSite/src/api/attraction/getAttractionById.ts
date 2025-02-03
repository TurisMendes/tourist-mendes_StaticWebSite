import FullAtracaoLocalType from "../../shared-lib/FullAtracaoLocalType";
import { ResponseDTO } from "../../shared-lib/typesHomePage";
import axios from "axios";

export const getAttractionById = async (_id: string) => {
  // need to handle exceptions
    const response = await axios.get<ResponseDTO<FullAtracaoLocalType>>(
      "/mockLocalAttraction.json"
    );

    return response.data;
};
