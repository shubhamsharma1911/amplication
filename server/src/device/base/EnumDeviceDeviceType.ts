import { registerEnumType } from "@nestjs/graphql";

export enum EnumDeviceDeviceType {
  KeyStone = "KeyStone",
  KeyTab = "KeyTab",
}

registerEnumType(EnumDeviceDeviceType, {
  name: "EnumDeviceDeviceType",
});
