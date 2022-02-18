import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsEnum, ValidateNested } from "class-validator";
import { EnumDeviceDeviceType } from "./EnumDeviceDeviceType";
import { FacilityWhereUniqueInput } from "../../facility/base/FacilityWhereUniqueInput";
import { Type } from "class-transformer";
import { EnumDeviceStatus } from "./EnumDeviceStatus";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
@InputType()
class DeviceCreateInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  deviceId!: string;

  @ApiProperty({
    required: true,
    enum: EnumDeviceDeviceType,
  })
  @IsEnum(EnumDeviceDeviceType)
  @Field(() => EnumDeviceDeviceType)
  deviceType!: "KeyStone" | "KeyTab";

  @ApiProperty({
    required: true,
    type: () => FacilityWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FacilityWhereUniqueInput)
  @Field(() => FacilityWhereUniqueInput)
  facility!: FacilityWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  manufacturer!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  model!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  size!: string;

  @ApiProperty({
    required: true,
    enum: EnumDeviceStatus,
  })
  @IsEnum(EnumDeviceStatus)
  @Field(() => EnumDeviceStatus)
  status!: "Pending" | "Approved" | "Active" | "Blocked" | "Removed";

  @ApiProperty({
    required: true,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @Field(() => UserWhereUniqueInput)
  user!: UserWhereUniqueInput;
}
export { DeviceCreateInput };
