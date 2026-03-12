export interface InvestorsUsInterface {
  data: Data2;
}

interface Data2 {
  id: number;
  attributes: Attributes3;
}

interface Attributes3 {
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  history: History;
  factsheet: Factsheet;
  mission_vision: Missionvision;
  localizations: Localizations;
}

interface Localizations {
  data: Datum[];
}

interface Datum {
  id: number;
  attributes: Attributes2;
}

interface Attributes2 {
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
}

export interface Missionvision {
  id: number;
  title: string;
  about_us_drop_down_cards: Aboutusdropdowncard[];
}

interface Aboutusdropdowncard {
  id: number;
  title: string;
  description: Text[];
}

export interface Factsheet {
  id: number;
  title: string;
  button_text: string;
  document: Document;
}

interface Document {
  data: Data3;
}

interface Data3 {
  id: number;
  attributes: Attributes4;
}

interface Attributes4 {
  name: string;
  alternativeText: null;
  caption: null;
  width: null;
  height: null;
  formats: null;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  createdAt: string;
  updatedAt: string;
  isUrlSigned: boolean;
}


export interface History {
  id: number;
  title: string;
  text: Text[];
  banner: Banner;
  section: Section[];
}

export interface Section {
  id: number;
  text: Text2[];
  background_color: string;
  image_position: string;
  image: Banner;
}

interface Text2 {
  type: string;
  level?: number;
  children: Child[];
}

interface Banner {
  data: Data;
}

interface Data {
  id: number;
  attributes: Attributes;
}

interface Attributes {
  name: string;
  alternativeText: null;
  caption: null;
  width: number;
  height: number;
  formats: null;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  createdAt: string;
  updatedAt: string;
  isUrlSigned: boolean;
}

interface Text {
  type: string;
  children: Child[];
}

interface Child {
  text: string;
  type: string;
}