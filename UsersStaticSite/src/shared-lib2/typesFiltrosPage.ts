import { EventDate } from "./FullEventoType";
import { ImageData } from "./typesHomePage";


/*Cards Types*/
export interface FiltrosAtracaoLocalCard {
  title: string;
  category: string;
  neighborhood: string;
  linkUrl: string;
  imageData: ImageData;
}

export interface FiltrosAgenteCulturalCard {
  name: string;
  category: string;
  linkUrl: string;
  imageData: ImageData;
}

interface TrailInfos {
  extension: number;
  difficulty: "Fácil" | "Moderada" | "Difícil" | "Muito Difícil" | "Experts";
}

export interface FiltrosTrilhaCard {
  title: string;
  trailInfos: TrailInfos;
  linkUrl: string;
  imageData: ImageData;
}

export interface FiltrosEventoCard {
  title: string;
  category: string;
  neighborhood: string;
  linkUrl: string;
  schedule: EventDate[];
  imageData: ImageData;
}

/*Filters Types*/
export interface AtracaoLocalCategory {
  id: string;
  name: string;
}

export interface FiltrosAtracaoLocalType {
  categories: AtracaoLocalCategory[];
  neighborhoods: Neighborhood[];
}

export interface AgenteCulturalCategory {
  id: string;
  name: string;
}

export interface areaOfExpert {
  id: string;
  name: string;
}

export interface FiltrosagenteCulturalType {
  categories: AgenteCulturalCategory[];
  areasOfExpert: areaOfExpert[];
}

export interface TrilhaCategory {
  id: string;
  name: string;
}

export interface FiltrosTrilhaType {
  categories: TrilhaCategory[];
  neighborhoods: Neighborhood[];
  difficulty: "Fácil" | "Moderada" | "Difícil" | "Muito Difícil" | "Experts";
}

export interface EventoCategory {
  id: string;
  name: string;
}

export interface FiltrosEventoType {
  categories: EventoCategory[];
  neighborhoods: Neighborhood[];
}


export interface Neighborhood {
  id: string;
  name: string;
}
