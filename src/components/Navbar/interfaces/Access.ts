export interface AccessInterface {
    data: Data2;
}

interface Data2 {
    id: number;
    attributes: Attributes5;
}

interface Attributes5 {
    access_url?: string;
    billing_url?: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}