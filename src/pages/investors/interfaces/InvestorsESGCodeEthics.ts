export interface InvestorESGCodeEthicsInterface {
  data: Data2;
}

interface Data2 {
  id: number;
  attributes: Attributes3;
}

interface Attributes3 {
  title: string;
  description: Description[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  download_code_of_ethics: Downloadcodeofethics;
  documents_list: Documentslist[];
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
  description: Description[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
}

interface Documentslist {
  id: number;
  title: string;
  file: File2;
}

interface File2 {
  data: Data | null;
}

interface Downloadcodeofethics {
  id: number;
  button_text: string;
  file: File;
}

interface File {
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

interface Description {
  type: string;
  children: Child[];
}

interface Child {
  text: string;
  type: string;
}