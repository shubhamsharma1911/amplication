import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, IsEnum, ValidateNested } from "class-validator";
import { EnumDeviceDeviceType } from "./EnumDeviceDeviceType";
import { FacilityWhereUniqueInput } from "../../facility/base/FacilityWhereUniqueInput";
import { EnumDeviceStatus } from "./EnumDeviceStatus";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
@InputType()
class DeviceWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  deviceId?: StringFilter;

  @ApiProperty({
    required: false,
    enum: EnumDeviceDeviceType,
  })
  @IsEnum(EnumDeviceDeviceType)
  @IsOptional()
  @Field(() => EnumDeviceDeviceType, {
    nullable: true,
  })
  deviceType?: "KeyStone" | "KeyTab";

  @ApiProperty({
    required: false,
    type: () => FacilityWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FacilityWhereUniqueInput)
  @IsOptional()
  @Field(() => FacilityWhereUniqueInput, {
    nullable: true,
  })
  facility?: FacilityWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  manufacturer?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  model?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  size?: StringFilter;

  @ApiProperty({
    required: false,
    enum: EnumDeviceStatus,
  })
  @IsEnum(EnumDeviceStatus)
  @IsOptional()
  @Field(() => EnumDeviceStatus, {
    nullable: true,
  })
  status?: "Pending" | "Approved" | "Active" | "Blocked" | "Removed";

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput;
}
export { DeviceWhereInput };
