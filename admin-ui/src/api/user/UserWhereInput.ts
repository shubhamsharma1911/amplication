import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DeviceWhereUniqueInput } from "../device/DeviceWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { FacilityWhereUniqueInput } from "../facility/FacilityWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type UserWhereInput = {
  customerId?: CustomerWhereUniqueInput;
  devices?: DeviceWhereUniqueInput;
  email?: StringFilter;
  facilityId?: FacilityWhereUniqueInput;
  firstName?: StringFilter;
  id?: StringFilter;
  lastName?: StringFilter;
  phoneNumber?: StringFilter;
  rollNumber?: StringNullableFilter;
  status?: "Pending" | "Approved" | "Active" | "Blocked" | "Removed";
  type?: "Student" | "Teacher" | "Manager" | "Parent" | "Volunteer";
  username?: StringFilter;
};
