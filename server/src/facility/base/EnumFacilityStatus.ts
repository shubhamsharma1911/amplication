import { registerEnumType } from "@nestjs/graphql";

export enum EnumFacilityStatus {
  Pending = "Pending",
  Approved = "Approved",
  Active = "Active",
  Blocked = "Blocked",
  Removed = "Removed",
}

registerEnumType(EnumFacilityStatus, {
  name: "EnumFacilityStatus",
});
