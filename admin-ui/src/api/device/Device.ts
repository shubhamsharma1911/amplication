import { Facility } from "../facility/Facility";
import { User } from "../user/User";

export type Device = {
  createdAt: Date;
  deviceId: string;
  deviceType?: "KeyStone" | "KeyTab";
  facility?: Facility;
  id: string;
  manufacturer: string;
  model: string;
  size: string;
  status?: "Pending" | "Approved" | "Active" | "Blocked" | "Removed";
  updatedAt: Date;
  user?: User;
};
