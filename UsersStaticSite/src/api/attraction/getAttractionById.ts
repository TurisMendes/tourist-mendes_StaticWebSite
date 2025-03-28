import FullAtracaoLocalType from "../../shared-lib/FullAtracaoLocalType";
import { ResponseDTO } from "../../shared-lib/typesHomePage";
import axios from "axios";

export const getAttractionById = async (id: string) => {
  // Atention this end point are not finished by backend
  try {
    const response = await axios.get<ResponseDTO<FullAtracaoLocalType>>(
      `/atracaoLocal/${id}`
    );

    return response.data;
  }
  catch (error) {
   if (axios.isAxiosError(error)) {
    if (error.response) {
      // This means that server send error, you can't change this
    } else if (error.request) {
      // this means that request was made but you got error but not from server
    } else {
      // use this for others errors (i.e. users side)
    }
   } else {
    // this error is not related to axios, like network, and you don't recieve messages from server.
   }
  }
};
