export interface InvestorsHeaderInterface {
  data: Data2;
}

interface Data2 {
  id: number;
  attributes: Attributes4;
}

interface Attributes4 {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  header: Header;
  localizations: Localizations;
}

interface Localizations {
  data: Datum2[];
}

interface Datum2 {
  id: number;
  attributes: Attributes3;
}

interface Attributes3 {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
}

export interface Header {
  id: number;
  subtitle: string;
  banner: Banner;
  downloads: Download[];
  Stock_information: Stockinformation2;
  tabs: Tab[];
}

export interface Tab {
  id: number;
  name: string;
  api_url: string;
}

interface Stockinformation2 {
  id: number;
  title: string;
  stock_information: Stockinformation;
}

interface Stockinformation {
  data: Data;
}

interface Data {
  id: number;
  attributes: Attributes2;
}

interface Attributes2 {
  operation_date: string;
  issuer: string;
  serie: string;
  opening_price: string;
  maximum_price: string;
  minimum_price: string;
  closing_price: string;
  volume: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface Download {
  id: number;
  name: string;
  document: Document;
}

interface Document {
  data: Datum;
}

interface Banner {
  data: Datum;
}

interface Datum {
  id: number;
  attributes: Attributes;
}

interface Attributes {
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