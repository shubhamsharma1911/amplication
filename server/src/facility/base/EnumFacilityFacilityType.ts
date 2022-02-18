import { registerEnumType } from "@nestjs/graphql";

export enum EnumFacilityFacilityType {
  School = "School",
  University = "University",
  College = "College",
}

registerEnumType(EnumFacilityFacilityType, {
  name: "EnumFacilityFacilityType",
});
