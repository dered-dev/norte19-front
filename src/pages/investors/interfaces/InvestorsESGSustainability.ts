export interface InvestorsESGSustainabilityInterface {
  data: Data3;
}

interface Data3 {
  id: number;
  attributes: Attributes4;
}

interface Attributes4 {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  sections: Section[];
  sustainability_report: Sustainabilityreport;
  goals: Goals;
  sustainable_model: Sustainablemodel;
  achievements: Achievements;
  certification_catalog: Certificationcatalog;
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
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
}

export interface Certificationcatalog {
  id: number;
  title: string;
  slider: Slider;
  dropdowns: Dropdown[];
}

interface Dropdown {
  id: number;
  title: string;
  dropdown_document: Dropdowndocument[];
}

interface Dropdowndocument {
  id: number;
  name: string;
  document: File;
}

interface Slider {
  data: Data[];
}

export interface Achievements {
  id: number;
  title: string;
  achievements_cards: Goalcard[];
}

export interface Sustainablemodel {
  id: number;
  title: string;
  subtitle: string;
  sustainable_model_card: Sustainablemodelcard[];
  models_slide: Modelsslide[];
}

export interface Modelsslide {
  id: number;
  title: string;
  description: Description2[];
  image: Image;
}

interface Description2 {
  type: string;
  format: string;
  children: Description[];
}

export interface Sustainablemodelcard {
  id: number;
  title: string;
  description: Description[];
}

export interface Goals {
  id: number;
  title: string;
  goal_card: Goalcard[];
}

export interface Goalcard {
  id: number;
  icon: string;
  description: Description[];
}

export interface Sustainabilityreport {
  id: number;
  title: string;
  subtitle: string;
  button_text: string;
  file: File;
}

interface File {
  data: Data2 | null;
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

export interface Section {
  id: number;
  title: string;
  description: Description[];
  image_position: string;
  image: Image;
}

interface Image {
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

interface Description {
  type: string;
  children: Child[];
}

interface Child {
  text: string;
  type: string;
}