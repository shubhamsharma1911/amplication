import { registerEnumType } from "@nestjs/graphql";

export enum EnumUserType {
  Student = "Student",
  Teacher = "Teacher",
  Manager = "Manager",
  Parent = "Parent",
  Volunteer = "Volunteer",
}

registerEnumType(EnumUserType, {
  name: "EnumUserType",
});
