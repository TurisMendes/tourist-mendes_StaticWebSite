export interface VideoData {
  videoUrl: string;
}

export interface ImageData {
  imageUrl: string;
  altDescription: string;
}

export interface HomeBanner {
  imageData: ImageData;
  linkUrl: string;
  description?: string;
}

export interface AtracaoLocalHomeCard {
  title: string;
  shortDescription: string;
  linkUrl: string;
  imageData: ImageData;
}

export interface AgenteCulturalHomeCard {
  name: string;
  shortDescription: string;
  linkUrl: string;
  imageData: ImageData;
}

export interface TrilhasHomeCard {
  title: string;
  level: string;
  shortDescription: string;
  linkUrl: string;
  imageData: ImageData;
}

export interface EventHomeCard {
  eventTitle: string;
  shortDescription: string;
  linkUrl: string;
  imageData: ImageData;
}

export interface AboutSessionData {
  aboutDescription: string[];
  emails: string[];
  phoneNumbers: string[];
  address: string;
}

export interface ResponseDTO<T> {
  message: string;
  status: number;
  dataType: string; // For debug porpuses
  data: T;
  totalRecords?: number;
}
