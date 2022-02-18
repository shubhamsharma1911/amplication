import { registerEnumType } from "@nestjs/graphql";

export enum EnumUserStatus {
  Pending = "Pending",
  Approved = "Approved",
  Active = "Active",
  Blocked = "Blocked",
  Removed = "Removed",
}

registerEnumType(EnumUserStatus, {
  name: "EnumUserStatus",
});
