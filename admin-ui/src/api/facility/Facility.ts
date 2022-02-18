import { Customer } from "../customer/Customer";
import { Device } from "../device/Device";
import { Rule } from "../rule/Rule";
import { User } from "../user/User";

export type Facility = {
  addressLine_1: string;
  addressLine_2: string | null;
  addressLine_3: string | null;
  city: string;
  country: string;
  createdAt: Date;
  customerId?: Customer;
  devices?: Device | null;
  email: string;
  facilityType?: "School" | "University" | "College";
  id: string;
  name: string;
  primaryContact: string;
  ruleId?: Array<Rule>;
  secondaryContact: string | null;
  state: string;
  status?: "Pending" | "Approved" | "Active" | "Blocked" | "Removed";
  updatedAt: Date;
  userId?: Array<User>;
  zipCode: string;
};
