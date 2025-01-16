import { HomeBanner, ResponseDTO } from "../../shared-lib/typesHomePage";
import axios from "axios";
import { axiosInstance } from "../axios-instance";
export const getBanners = async (): Promise<ResponseDTO<HomeBanner[]>> => {
  try {
    const response = await axiosInstance.get<HomeBanner[]>(
      "/mockBanners.json"
    );
    return {
      data: response.data,
      status: response.status,
      message: "Success",
      dataType: "BANNERS",
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        data: [],
        status: error.response?.status || 500,
        message: error.message,
        dataType: "BANNERS",
      };
    }
    return {
      data: [],
      status: 500,
      message: "An unexpected error occurred",
      dataType: "BANNERS",
    };
  }
};
