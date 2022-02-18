import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsString, IsEnum, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { EnumDeviceDeviceType } from "./EnumDeviceDeviceType";
import { Facility } from "../../facility/base/Facility";
import { EnumDeviceStatus } from "./EnumDeviceStatus";
import { User } from "../../user/base/User";
@ObjectType()
class Device {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

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
  @Field(() => EnumDeviceDeviceType, {
    nullable: true,
  })
  deviceType?: "KeyStone" | "KeyTab";

  @ApiProperty({
    required: true,
    type: () => Facility,
  })
  @ValidateNested()
  @Type(() => Facility)
  facility?: Facility;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

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
  @Field(() => EnumDeviceStatus, {
    nullable: true,
  })
  status?: "Pending" | "Approved" | "Active" | "Blocked" | "Removed";

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: true,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  user?: User;
}
export { Device };
