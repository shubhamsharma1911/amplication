import { registerEnumType } from "@nestjs/graphql";

export enum EnumCustomerStatus {
  Pending = "Pending",
  Approved = "Approved",
  Active = "Active",
  Blocked = "Blocked",
  Removed = "Removed",
}

registerEnumType(EnumCustomerStatus, {
  name: "EnumCustomerStatus",
});
