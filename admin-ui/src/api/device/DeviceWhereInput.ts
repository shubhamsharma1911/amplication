import { StringFilter } from "../../util/StringFilter";
import { FacilityWhereUniqueInput } from "../facility/FacilityWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DeviceWhereInput = {
  deviceId?: StringFilter;
  deviceType?: "KeyStone" | "KeyTab";
  facility?: FacilityWhereUniqueInput;
  id?: StringFilter;
  manufacturer?: StringFilter;
  model?: StringFilter;
  size?: StringFilter;
  status?: "Pending" | "Approved" | "Active" | "Blocked" | "Removed";
  user?: UserWhereUniqueInput;
};
