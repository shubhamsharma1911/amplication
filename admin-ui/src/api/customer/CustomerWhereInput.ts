import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";

export type CustomerWhereInput = {
  addressLine_1?: StringFilter;
  addressLine_2?: StringNullableFilter;
  addressLine_3?: StringNullableFilter;
  city?: StringFilter;
  country?: StringFilter;
  email?: StringFilter;
  firstName?: StringFilter;
  id?: StringFilter;
  lastName?: StringFilter;
  pincode?: StringFilter;
  state?: StringFilter;
  status?: "Pending" | "Approved" | "Active" | "Blocked" | "Removed";
  telephone?: IntFilter;
};
