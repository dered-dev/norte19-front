export interface HeaderResponse {
  id: number;
  attributes: HeaderAttributes;
}

export interface HeaderAttributes {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  header_sections: HeaderSection[];
  header_logo: HeaderLogo;
  localizations: HeaderLocalizations;
}

export interface HeaderSection {
  id: number;
  isEnabled: boolean;
  section_name: string;
  url: string;
}

export interface HeaderLogo {
  data: HeaderLogoData;
}

export interface HeaderLogoData {
  id: number;
  attributes: HeaderLogoAttributes;
}

export interface HeaderLogoAttributes {
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: HeaderLogoFormats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string;
  provider: string;
  provider_metadata: string;
  createdAt: string;
  updatedAt: string;
  isUrlSigned: boolean;
}

export interface HeaderLogoFormats {
  small: HeaderLogoFormatAttributes;
  thumbnail: HeaderLogoFormatAttributes;
}

export interface HeaderLogoFormatAttributes {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
  isUrlSigned: boolean;
}

export interface HeaderLocalizations {
  data: HeaderLocalizationsData[];
}

export interface HeaderLocalizationsData {
  id: number;
  attributes: HeaderLocalizationsAttributes;
}

export interface HeaderLocalizationsAttributes {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
}
