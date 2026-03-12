export interface PrivacyNoticeInterface {
  data: Data2;
}

interface Data2 {
  id: number;
  attributes: Attributes3;
}

interface Attributes3 {
  title: string;
  policy: Policy[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  banner: Banner;
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
  policy: Policy[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
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

export interface Policy {
  type: string;
  level?: number;
  children: Child2[];
}

export interface Child2 {
  text?: string;
  type: string;
  bold?: boolean;
  url?: string;
  children?: Child[];
}

interface Child {
  text: string;
  type: string;
}