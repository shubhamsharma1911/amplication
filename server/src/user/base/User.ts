import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  ValidateNested,
  IsOptional,
  IsString,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { Customer } from "../../customer/base/Customer";
import { Device } from "../../device/base/Device";
import { Facility } from "../../facility/base/Facility";
import { EnumUserStatus } from "./EnumUserStatus";
import { EnumUserType } from "./EnumUserType";
@ObjectType()
class User {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: () => Customer,
  })
  @ValidateNested()
  @Type(() => Customer)
  @IsOptional()
  customerId?: Customer | null;

  @ApiProperty({
    required: false,
    type: () => Device,
  })
  @ValidateNested()
  @Type(() => Device)
  @IsOptional()
  devices?: Device | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  email!: string;

  @ApiProperty({
    required: false,
    type: () => Facility,
  })
  @ValidateNested()
  @Type(() => Facility)
  @IsOptional()
  facilityId?: Facility | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  firstName!: string;

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
  lastName!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  phoneNumber!: string;

  @ApiProperty({
    required: true,
    type: [String],
  })
  @IsString({
    each: true,
  })
  @Field(() => [String])
  roles!: Array<string>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  rollNumber!: string | null;

  @ApiProperty({
    required: true,
    enum: EnumUserStatus,
  })
  @IsEnum(EnumUserStatus)
  @Field(() => EnumUserStatus, {
    nullable: true,
  })
  status?: "Pending" | "Approved" | "Active" | "Blocked" | "Removed";

  @ApiProperty({
    required: true,
    enum: EnumUserType,
  })
  @IsEnum(EnumUserType)
  @Field(() => EnumUserType, {
    nullable: true,
  })
  type?: "Student" | "Teacher" | "Manager" | "Parent" | "Volunteer";

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  username!: string;
}
export { User };
