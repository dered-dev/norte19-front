export interface InvestorBursatilInterface {
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
  title: string;
  analyst_coverage: Analystcoverage;
  shareholding_donut_bar: Shareholdingdonutbar;
  stock_info: Stockinfo;
  press_releases: Pressreleases;
  upcoming_events: Upcomingevents;
  analyst_coverage_table: Analystcoveragetable;
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
  title: string;
}

export interface Analystcoveragetable {
  id: number;
  analyst_coverage_table_header: Analystcoveragetableheader;
  analyst_coverage_table_body: Analystcoveragetablebody[];
}

interface Analystcoveragetablebody {
  id: number;
  financial_institution: string;
  analyst: string;
  email: string;
  recommendation: string;
  target_price: string;
}

interface Analystcoveragetableheader {
  id: number;
  financial_institucion: string;
  analyst: string;
  email: string;
  recommendation: string;
  target_price: string;
}

export interface Upcomingevents {
  id: number;
  title: string;
  events: Event[];
}

interface Event {
  id: number;
  date: string;
  title: string;
  description: Description[];
}

interface Description {
  type: string;
  children: Child[];
}

interface Child {
  text: string;
  type: string;
}

export interface Pressreleases {
  id: number;
  title: string;
  press_releases: Pressrelease[];
}

interface Pressrelease {
  id: number;
  year: string;
  press_release_field: Pressreleasefield[];
}

interface Pressreleasefield {
  id: number;
  title: string;
  file: Banner;
}

export interface Stockinfo {
  id: number;
  title: string;
  subtitle: string;
  graph_title: string;
  graph_button_title: string;
  stock_information: Stockinformation;
}

interface Stockinformation {
  data: Data2;
}

interface Data2 {
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

export interface Shareholdingdonutbar {
  id: number;
  title: string;
  fields: Field[];
}

interface Field {
  id: number;
  label: string;
  value: string;
}

export interface Analystcoverage {
  id: number;
  title: string;
  banner: Banner;
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