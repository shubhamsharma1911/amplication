import { registerEnumType } from "@nestjs/graphql";

export enum EnumProviderStatus {
  Pending = "Pending",
  Approved = "Approved",
  Active = "Active",
  Blocked = "Blocked",
  Removed = "Removed",
}

registerEnumType(EnumProviderStatus, {
  name: "EnumProviderStatus",
});
