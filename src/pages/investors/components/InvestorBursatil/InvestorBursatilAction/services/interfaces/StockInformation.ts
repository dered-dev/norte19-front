export interface StockInformationInterface {
  data: Datum[];
  meta: Meta;
}

interface Meta {
  pagination: Pagination;
}

interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface Datum {
  id: number;
  attributes: Attributes;
}

interface Attributes {
  operation_date: string;
  issuer: string;
  serie: string;
  opening_price: string;
  maximum_price: string;
  minimum_price: string;
  closing_price: string;
  volume: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}