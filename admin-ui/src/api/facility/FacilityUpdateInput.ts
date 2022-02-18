import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DeviceWhereUniqueInput } from "../device/DeviceWhereUniqueInput";

export type FacilityUpdateInput = {
  addressLine_1?: string;
  addressLine_2?: string | null;
  addressLine_3?: string | null;
  city?: string;
  country?: string;
  customerId?: CustomerWhereUniqueInput;
  devices?: DeviceWhereUniqueInput | null;
  email?: string;
  facilityType?: "School" | "University" | "College";
  name?: string;
  primaryContact?: string;
  secondaryContact?: string | null;
  state?: string;
  status?: "Pending" | "Approved" | "Active" | "Blocked" | "Removed";
  zipCode?: string;
};
