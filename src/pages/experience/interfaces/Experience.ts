export interface ExperienceInterface {
    data: Data4;
}

interface Data4 {
    id: number;
    attributes: Attributes4;
}

interface Attributes4 {
    success_stories_title: string;
    proyects_title: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    banner: Banner;
    success_stories: Successstories;
    proyects: Proyect[];
    brands_carrousell: Brandscarrousell;
}

export interface Brandscarrousell {
    data: Data2[];
}

export interface Proyect {
    id: number;
    date: string;
    proyect: string;
    description: Storie[];
    image: Image;
}

interface Image {
    data: Data3;
}

interface Data3 {
    id: number;
    attributes: Attributes3;
}

interface Attributes3 {
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
    thumbnail: Thumbnail;
}

interface Thumbnail {
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

export interface Successstories {
    id: number;
    experiences: Experience[];
}

export interface Experience {
    id: number;
    name: string;
    brand: string;
    storie: Storie[];
    profile_photo: Profilephoto;
}

interface Profilephoto {
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

export interface Storie {
    type: string;
    children: Child[];
}

interface Child {
    text: string;
    type: string;
}

export interface Banner {
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