export interface InvestorESGTipLineInterface {
  data: Data;
}

interface Data {
  id: number;
  attributes: Attributes;
}

interface Attributes {
  title: string;
  description: Description[];
  complaints_procedure: Complaintsprocedure[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
}

interface Complaintsprocedure {
  type: string;
  children: Child3[];
}

interface Child3 {
  bold?: boolean;
  text?: string;
  type: string;
  url?: string;
  children?: Child2[];
}

interface Child2 {
  text: string;
  type: string;
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