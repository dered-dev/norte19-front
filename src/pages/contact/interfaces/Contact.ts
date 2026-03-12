export interface ContactInterface {
  data: Data2;
}

interface Data2 {
  id: number;
  attributes: Attributes3;
}

interface Attributes3 {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  banner: Banner;
  pages: Page[];
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
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
}

export interface Page {
  id: number;
  title: string;
  description: Description[];
  tab: string;
  form: FormInterface;
}

export interface FormInterface {
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
  children: Child2[];
}

interface Child2 {
  text?: string;
  type: string;
  url?: string;
  children?: Child[];
}

interface Description {
  type: string;
  children: Child[];
}

interface Child {
  text: string;
  type: string;
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