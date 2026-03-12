export interface LeadersInterface {
  data: Data3;
}

interface Data3 {
  id: number;
  attributes: Attributes5;
}

interface Attributes5 {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  header: Header;
  leaders: Leader[];
  sections: Section[];
  job_board: Jobboard;
  localizations: Localizations;
}

interface Localizations {
  data: Datum2[];
}

interface Datum2 {
  id: number;
  attributes: Attributes4;
}

interface Attributes4 {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
}
export interface Jobboard {
  id: number;
  title: string;
  description: Description[];
  form: Form;
}

interface Form {
  id: number;
  terms_and_conditions: Termsandcondition[];
  select_field: Selectfield[];
  input_field: Inputfield[];
  textarea_field: Textareafield[];
  button: Button;
}

interface Button {
  id: number;
  text: string;
  url: string;
}

interface Textareafield {
  id: number;
  field: string;
  label: string;
  placeholder: string;
  error_message: string;
}

interface Inputfield {
  id: number;
  field: string;
  label: string;
  type: string;
  placeholder: string;
  error_message: string;
}

interface Selectfield {
  id: number;
  field: string;
  label: string;
  options: Description[];
  placeholder: string;
  error_message: string;
}


interface Termsandcondition {
  type: string;
  children: Child3[];
}

interface Child3 {
  text?: string;
  type: string;
  url?: string;
  children?: Child[];
}

export interface Section {
  id: number;
  title: string;
  description: Description2[];
  background_color: string;
  image_position: string;
  index: number;
  image: Image2;
}

interface Image2 {
  data: Datum | Data | null;
}

interface Datum {
  id: number;
  attributes: Attributes3;
}

interface Attributes3 {
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

interface Description2 {
  type: string;
  children: Child2[];
  format?: string;
}

export interface Child2 {
  text?: string;
  type: string;
  children?: Child[];
  bold?: boolean;
}

export interface Leader {
  id: number;
  name: string;
  position_title: string;
  biography: Description[];
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
  formats: Formats;
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

interface Formats {
  small: Small;
  thumbnail: Small;
}

interface Small {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
  isUrlSigned: boolean;
}

export interface Header {
  id: number;
  title: string;
  description: Description[];
  background: Background;
  second_title: string;
}

interface Background {
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
  bold?: boolean;
  text: string;
  type: string;
}