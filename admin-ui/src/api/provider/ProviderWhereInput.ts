import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ProviderWhereInput = {
  addressLine_1?: StringFilter;
  addressLine_2?: StringNullableFilter;
  addressLine_3?: StringNullableFilter;
  city?: StringFilter;
  country?: StringFilter;
  description?: StringNullableFilter;
  email?: StringFilter;
  id?: StringFilter;
  name?: StringFilter;
  pincode?: StringFilter;
  state?: StringFilter;
  status?: "Pending" | "Approved" | "Active" | "Blocked" | "Removed";
  Telephone?: StringFilter;
};
