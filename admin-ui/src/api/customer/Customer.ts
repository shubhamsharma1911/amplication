import { Facility } from "../facility/Facility";
import { User } from "../user/User";

export type Customer = {
  addressLine_1: string;
  addressLine_2: string | null;
  addressLine_3: string | null;
  city: string;
  country: string;
  createdAt: Date;
  email: string;
  facilityId?: Array<Facility>;
  firstName: string;
  id: string;
  lastName: string;
  pincode: string;
  state: string;
  status?: "Pending" | "Approved" | "Active" | "Blocked" | "Removed";
  telephone: number;
  updatedAt: Date;
  userId?: Array<User>;
};
