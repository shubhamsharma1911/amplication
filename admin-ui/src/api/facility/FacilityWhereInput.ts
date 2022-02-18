import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DeviceWhereUniqueInput } from "../device/DeviceWhereUniqueInput";

export type FacilityWhereInput = {
  addressLine_1?: StringFilter;
  addressLine_2?: StringNullableFilter;
  addressLine_3?: StringNullableFilter;
  city?: StringFilter;
  country?: StringFilter;
  customerId?: CustomerWhereUniqueInput;
  devices?: DeviceWhereUniqueInput;
  email?: StringFilter;
  facilityType?: "School" | "University" | "College";
  id?: StringFilter;
  name?: StringFilter;
  primaryContact?: StringFilter;
  secondaryContact?: StringNullableFilter;
  state?: StringFilter;
  status?: "Pending" | "Approved" | "Active" | "Blocked" | "Removed";
  zipCode?: StringFilter;
};
