export interface InvestorsFinancialInterface {
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
  report_section: Reportsection;
  reports: Report[];
  corporate_presentation: Corporatepresentation;
  section_prospectuses: Sectionprospectuses;
  section_ftsay: Sectionftsay;
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

export interface Sectionftsay {
  id: number;
  title: string;
  subtitle: string;
  ftsay_documents: Ftsaydocument[];
  image: Image;
}

export interface Ftsaydocument {
  id: number;
  title: string;
  pdf: Pdf;
  bmv: Pdf;
  corpp: Corpp;
}

interface Corpp {
  data: Data[] | null;
}

interface Pdf {
  data: Data | null;
}

export interface Sectionprospectuses {
  id: number;
  title: string;
  subtitle: string;
  prospectuses_documents: Prospectusesdocument[];
  image: Image;
}

interface Image {
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

export interface Prospectusesdocument {
  id: number;
  title: string;
  file: Banner;
}

export interface Corporatepresentation {
  id: number;
  title: string;
  subtitle: string;
  button_text: string;
  file: Banner;
}

export interface Report {
  id: number;
  year: string;
  year_report: Yearreport;
  quarters: Quarter[];
}

interface Yearreport {
  id: number;
  name: string;
  document: Banner | null;
}

export interface Quarter {
  id: number;
  quarter: string;
  pdf: Banner | null;
  xls: Banner | null;
  audio: Banner | null;
  bwv: Banner | null;
  corpp: Banner | null;
}

export interface Reportsection {
  id: number;
  title: string;
  button_text: string;
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