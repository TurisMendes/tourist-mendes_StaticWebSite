import { BASE_URL_API } from "../../globalConstants";
import FullAtracaoLocalType from "../../shared-lib/FullAtracaoLocalType";
import { ResponseDTO } from "../../shared-lib/typesHomePage";
import axios, { AxiosError } from "axios";

export const getAttractionById = async (id: string) => {
  try {
    const axiosInstance = axios.create({
      baseURL: `${BASE_URL_API}/atracaoLocal/${id}`,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    const response = await axiosInstance.get<ResponseDTO<FullAtracaoLocalType>>(
      `/mockLocalAttraction.json`
    )

    return response.data;

  } catch (error) {
     const errorResponse: ResponseDTO<FullAtracaoLocalType> = {
        message:
          error instanceof AxiosError
            ? error.message
            : "Erro ao carregar atração local",
        status: error instanceof AxiosError ? error.response?.status ?? 500 : 500,
        dataType: "ATRAÇÃO LOCAL",
       data: {
         title: "",
         category: "",
         longDescription: "",
         historicalInfo: "",
         workingTime: "",
         contacts: {
           phoneNumbers: [],
           email: [],
           site: [],
           address: [],
         },
         socialMedia: {
           instagram: "",
           facebooK: "",
           tiktok: "",
           whatsapp: "",
           twitter: "",
         },
         coverImage: {
           imageUrl: "",
           altDescription: "",
         },
         photoGallery: [{
           imageUrl: "",
           altDescription: "",
         }],
          videos: [{
            videoUrl: "",
          }],
          tour360UrlLink: "",
          mapUrlLink: "",
        },
      };
  
      return errorResponse
  }
};
