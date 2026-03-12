export interface InvestorContactInterface {
  data: Data;
}

interface Data {
  id: number;
  attributes: Attributes2;
}

interface Attributes2 {
  title: string;
  section: Section[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  form_title: string;
  form: Form;
  localizations: Localizations;
}

interface Localizations {
  data: Datum[];
}

interface Datum {
  id: number;
  attributes: Attributes;
}

interface Attributes {
  section: Section[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  form_title: string;
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

interface Description {
  type: string;
  children: Child[];
}

interface Section {
  type: string;
  children: Child2[];
}

interface Child2 {
  bold?: boolean;
  text?: string;
  type: string;
  url?: string;
  children?: Child[];
}

interface Child {
  text: string;
  type: string;
}