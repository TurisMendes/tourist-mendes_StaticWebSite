import { ImageData, VideoData } from "./typesHomePage";

export default interface FullAgenteCulturalType {
  name: string;
  category: string;
  aboutMe: string[];
  myContributions: string[];
  profileImg: ImageData;
  coverImg: ImageData;
  mapUrlLink?: string;
  contacts: {
    phoneNumbers?: string[];
    email?: string[];
    site?: string;
    address?: string;
  };
  socialMedia: {
    instagram?: string;
    facebook?: string;
    tiktok?: string;
    whatsapp?: string;
    twitter?: string;
  };
  tags: string[];
  photoGallery?: ImageData[];
  videos?: VideoData[];
}