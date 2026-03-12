export interface InvestorsHomeInterface {
  data: Data3;
}

interface Data3 {
  id: number;
  attributes: Attributes4;
}

interface Attributes4 {
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  sections: Section[];
  in_numbers: Innumbers;
  localizations: Localizations;
}

interface Localizations {
  data: Datum[];
}

interface Datum {
  id: number;
  attributes: Attributes3;
}

interface Attributes3 {
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
}

export interface Innumbers {
  id: number;
  title: string;
  banner: Banner;
  numbers: NumberSection[];
  contact_us: Contactus;
}

interface Contactus {
  id: number;
  title: string;
  button_text: string;
}

interface NumberSection {
  id: number;
  amount: number;
  subtitle: string;
}

export interface Section {
  id: number;
  title: string;
  banner: Banner;
  documents: Document2[];
  links: Link[];
}

interface Link {
  id: number;
  title: string;
  url: string;
}

interface Document2 {
  id: number;
  name: string;
  document: Document;
}

interface Document {
  data: Data2;
}

interface Data2 {
  id: number;
  attributes: Attributes2;
}

interface Attributes2 {
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