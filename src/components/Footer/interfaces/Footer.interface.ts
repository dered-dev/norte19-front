export interface FooterInterface {
  data: Data;
  meta: object;
}

interface Data {
  id: number;
  attributes: Attributes;
}

interface Attributes {
  copyright: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  logo: Logo;
  social_media: SocialMedum[];
  sections: Section[];
  localizations: Localizations;
}

interface Logo {
  data: Data2;
}

interface Data2 {
  id: number;
  attributes: Attributes2;
}

interface Attributes2 {
  name: string;
  alternativeText: unknown;
  caption: unknown;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: unknown;
  provider: string;
  provider_metadata: unknown;
  createdAt: string;
  updatedAt: string;
  isUrlSigned: boolean;
}

interface Formats {
  small: Small;
  thumbnail: Thumbnail;
}

interface Small {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: unknown;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
  isUrlSigned: boolean;
}

interface Thumbnail {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: unknown;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
  isUrlSigned: boolean;
}

interface SocialMedum {
  id: number;
  link: string;
  social_media: string;
}

export interface FooterSection {
  id: number;
  title: string;
  link: Link[];
  contact?: Contact;
}

export interface Link {
  id: number;
  isEnabled: boolean;
  section_name: string;
  url: string;
}

interface Contact {
  id: number;
  phone: string;
  address: string;
  address_link: string;
}

interface Localizations {
  data: Daum[];
}

interface Daum {
  id: number;
  attributes: Attributes3;
}

interface Attributes3 {
  copyright: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
}
