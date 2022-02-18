export type ProviderCreateInput = {
  addressLine_1: string;
  addressLine_2?: string | null;
  addressLine_3?: string | null;
  city: string;
  country: string;
  description?: string | null;
  email: string;
  name: string;
  pincode: string;
  state: string;
  status: "Pending" | "Approved" | "Active" | "Blocked" | "Removed";
  Telephone: string;
};
