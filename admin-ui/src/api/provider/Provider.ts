import { Content } from "../content/Content";

export type Provider = {
  addressLine_1: string;
  addressLine_2: string | null;
  addressLine_3: string | null;
  city: string;
  contents?: Array<Content>;
  country: string;
  createdAt: Date;
  description: string | null;
  email: string;
  id: string;
  name: string;
  pincode: string;
  state: string;
  status?: "Pending" | "Approved" | "Active" | "Blocked" | "Removed";
  Telephone: string;
  updatedAt: Date;
};
