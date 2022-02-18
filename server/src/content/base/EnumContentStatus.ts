import { registerEnumType } from "@nestjs/graphql";

export enum EnumContentStatus {
  Pending = "Pending",
  Approved = "Approved",
  Active = "Active",
  Blocked = "Blocked",
  Removed = "Removed",
}

registerEnumType(EnumContentStatus, {
  name: "EnumContentStatus",
});
