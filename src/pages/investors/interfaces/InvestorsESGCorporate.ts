export interface InvestorESGCorporateInterface {
  data: Data2;
}

interface Data2 {
  id: number;
  attributes: Attributes5;
}

interface Attributes5 {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  assembly_table: Assemblytable[];
  board_members: Boardmembers;
  social_statues: Socialstatues;
  governance_policies: Governancepolicies;
  localizations: Localizations;
}

interface Localizations {
  data: Datum3[];
}

interface Datum3 {
  id: number;
  attributes: Attributes4;
}

interface Attributes4 {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
}

export interface Governancepolicies {
  id: number;
  title: string;
  description: Description[];
  image: Image2;
  policies_list: Policieslist[];
}

interface Policieslist {
  id: number;
  title: string;
  file: File2;
}

interface File2 {
  data: Datum[] | null;
}

interface Image2 {
  data: Datum2;
}

interface Datum2 {
  id: number;
  attributes: Attributes3;
}

interface Attributes3 {
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

export interface Socialstatues {
  id: number;
  title: string;
  subtitle: string;
  button_text: string;
  file: File;
}

interface File {
  data: null | Datum;
}

export interface Boardmembers {
  id: number;
  title: string;
  description: Description[];
  Board_members_list: Boardmemberslist[];
}

interface Boardmemberslist {
  id: number;
  name: string;
  position_title: string;
  biography: Description[];
  image: Image;
}

interface Image {
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

interface Description {
  type: string;
  children: Child[];
}

interface Child {
  text: string;
  type: string;
}

export interface Assemblytable {
  id: number;
  Head: Head;
}

export interface Head {
  id: number;
  assembly: string;
  convocation: string;
  resolutions: string;
  annexes: string;
  Body: Body[];
}

interface Body {
  id: number;
  assembly: string;
  convocation: File;
  resolutions: File;
  annexes: File;
}

interface Datum {
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
