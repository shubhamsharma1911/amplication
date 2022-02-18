export type CustomerUpdateInput = {
  addressLine_1?: string;
  addressLine_2?: string | null;
  addressLine_3?: string | null;
  city?: string;
  country?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  pincode?: string;
  state?: string;
  status?: "Pending" | "Approved" | "Active" | "Blocked" | "Removed";
  telephone?: number;
};
