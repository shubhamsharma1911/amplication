import { FacilityWhereUniqueInput } from "../facility/FacilityWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DeviceCreateInput = {
  deviceId: string;
  deviceType: "KeyStone" | "KeyTab";
  facility: FacilityWhereUniqueInput;
  manufacturer: string;
  model: string;
  size: string;
  status: "Pending" | "Approved" | "Active" | "Blocked" | "Removed";
  user: UserWhereUniqueInput;
};
