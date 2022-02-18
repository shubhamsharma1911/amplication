import { registerEnumType } from "@nestjs/graphql";

export enum EnumDeviceStatus {
  Pending = "Pending",
  Approved = "Approved",
  Active = "Active",
  Blocked = "Blocked",
  Removed = "Removed",
}

registerEnumType(EnumDeviceStatus, {
  name: "EnumDeviceStatus",
});
