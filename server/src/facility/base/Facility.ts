import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsOptional,
  IsDate,
  ValidateNested,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { Customer } from "../../customer/base/Customer";
import { Device } from "../../device/base/Device";
import { EnumFacilityFacilityType } from "./EnumFacilityFacilityType";
import { Rule } from "../../rule/base/Rule";
import { EnumFacilityStatus } from "./EnumFacilityStatus";
import { User } from "../../user/base/User";
@ObjectType()
class Facility {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  addressLine_1!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  addressLine_2!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  addressLine_3!: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  city!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  country!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: () => Customer,
  })
  @ValidateNested()
  @Type(() => Customer)
  customerId?: Customer;

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
    required: true,
    enum: EnumFacilityFacilityType,
  })
  @IsEnum(EnumFacilityFacilityType)
  @Field(() => EnumFacilityFacilityType, {
    nullable: true,
  })
  facilityType?: "School" | "University" | "College";

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
  name!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  primaryContact!: string;

  @ApiProperty({
    required: false,
    type: () => [Rule],
  })
  @ValidateNested()
  @Type(() => Rule)
  @IsOptional()
  ruleId?: Array<Rule>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  secondaryContact!: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  state!: string;

  @ApiProperty({
    required: true,
    enum: EnumFacilityStatus,
  })
  @IsEnum(EnumFacilityStatus)
  @Field(() => EnumFacilityStatus, {
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
    required: false,
    type: () => [User],
  })
  @ValidateNested()
  @Type(() => User)
  @IsOptional()
  userId?: Array<User>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  zipCode!: string;
}
export { Facility };
