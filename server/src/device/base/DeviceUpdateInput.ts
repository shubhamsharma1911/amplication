import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, IsEnum, ValidateNested } from "class-validator";
import { EnumDeviceDeviceType } from "./EnumDeviceDeviceType";
import { FacilityWhereUniqueInput } from "../../facility/base/FacilityWhereUniqueInput";
import { Type } from "class-transformer";
import { EnumDeviceStatus } from "./EnumDeviceStatus";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
@InputType()
class DeviceUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  deviceId?: string;

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
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  manufacturer?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  model?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  size?: string;

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
export { DeviceUpdateInput };
