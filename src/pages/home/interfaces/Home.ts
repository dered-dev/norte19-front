export interface HomeInterface {
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
  home_slider: Homeslider;
  About_us: Aboutus;
  Our_services: Ourservices;
  sustainability: Sustainability;
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

export interface Sustainability {
  id: number;
  title: string;
  description: Description[];
  button_title: string;
  slider: Slider;
}

interface Slider {
  data: Data[];
}

export interface Ourservices {
  id: number;
  title: string;
  subtitle: string;
  footer: Description[];
  cards: Card3[];
  background_image: Backgroundimage;
  sections: Section[];
}

export interface Section {
  id: number;
  title: string;
  subtitle: null;
  description: Description[];
  image: Image;
}

interface Image {
  data: Data | null;
}

interface Backgroundimage {
  data: Data;
}

interface Data {
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

interface Card3 {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Aboutus {
  id: number;
  home_about_us_title: string;
  Home_about_us_section_1: Homeaboutussection1;
  home_about_us_section_2: Homeaboutussection2;
}

interface Homeaboutussection2 {
  id: number;
  description: Description[];
  cards: Card2[];
}

interface Card2 {
  id: number;
  subtitle: string;
  icon: string;
}

interface Homeaboutussection1 {
  id: number;
  description: Description[];
  cards: Card[];
}

interface Card {
  id: number;
  amount: number;
  subtitle: string;
}

interface Description {
  type: string;
  children: Child[];
}

export interface Child {
  text: string;
  type: string;
  bold?: boolean;
}

export interface Homeslider {
  id: number;
  title: string;
  media: Media;
}

interface Media {
  data: Datum[];
}

interface Datum {
  id: number;
  attributes: Attributes;
}

interface Attributes {
  name: string;
  alternativeText: null;
  caption: null;
  width: null | number;
  height: null | number;
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