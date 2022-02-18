import { Customer } from "../customer/Customer";
import { Device } from "../device/Device";
import { Facility } from "../facility/Facility";

export type User = {
  createdAt: Date;
  customerId?: Customer | null;
  devices?: Device | null;
  email: string;
  facilityId?: Facility | null;
  firstName: string;
  id: string;
  lastName: string;
  phoneNumber: string;
  roles: Array<string>;
  rollNumber: string | null;
  status?: "Pending" | "Approved" | "Active" | "Blocked" | "Removed";
  type?: "Student" | "Teacher" | "Manager" | "Parent" | "Volunteer";
  updatedAt: Date;
  username: string;
};
