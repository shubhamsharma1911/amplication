import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DeviceWhereUniqueInput } from "../device/DeviceWhereUniqueInput";
import { FacilityWhereUniqueInput } from "../facility/FacilityWhereUniqueInput";

export type UserUpdateInput = {
  customerId?: CustomerWhereUniqueInput | null;
  devices?: DeviceWhereUniqueInput | null;
  email?: string;
  facilityId?: FacilityWhereUniqueInput | null;
  firstName?: string;
  lastName?: string;
  password?: string;
  phoneNumber?: string;
  roles?: Array<string>;
  rollNumber?: string | null;
  status?: "Pending" | "Approved" | "Active" | "Blocked" | "Removed";
  type?: "Student" | "Teacher" | "Manager" | "Parent" | "Volunteer";
  username?: string;
};
