export interface HomeManagementInterface {
  data: Data2;
}

interface Data2 {
  id: number;
  attributes: Attributes4;
}

interface Attributes4 {
  title: string;
  page_description: Pagedescription[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  slider_background: Sliderbackground;
  section_with_slider: Sectionwithslider;
  sections: Section[];
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
  title: string;
  page_description: Pagedescription[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
}

export interface Section {
  id: number;
  title: null | string;
  subtitle: null | string;
  description: Description[];
  image: Image;
}

interface Image {
  data: Data | Datum | null;
}

interface Description {
  type: string;
  children: Child3[];
  format?: string;
}

interface Child3 {
  text?: string;
  type: string;
  bold?: boolean;
  children?: Child2[];
}

interface Child2 {
  text: string;
  type: string;
  bold?: boolean;
}

export interface Sectionwithslider {
  id: number;
  title: string;
  description: Pagedescription[];
  slider: Slider;
}

interface Slider {
  data: Datum[];
}

interface Datum {
  id: number;
  attributes: Attributes2;
}

interface Attributes2 {
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

export interface Sliderbackground {
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

export interface Pagedescription {
  type: string;
  children: Child[];
}

interface Child {
  text: string;
  type: string;
  bold?: boolean;
}