import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested, IsEnum } from "class-validator";
import { CustomerWhereUniqueInput } from "../../customer/base/CustomerWhereUniqueInput";
import { Type } from "class-transformer";
import { DeviceWhereUniqueInput } from "../../device/base/DeviceWhereUniqueInput";
import { EnumFacilityFacilityType } from "./EnumFacilityFacilityType";
import { EnumFacilityStatus } from "./EnumFacilityStatus";
@InputType()
class FacilityCreateInput {
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
  addressLine_2?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  addressLine_3?: string | null;

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
    type: () => CustomerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CustomerWhereUniqueInput)
  @Field(() => CustomerWhereUniqueInput)
  customerId!: CustomerWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => DeviceWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DeviceWhereUniqueInput)
  @IsOptional()
  @Field(() => DeviceWhereUniqueInput, {
    nullable: true,
  })
  devices?: DeviceWhereUniqueInput | null;

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
  @Field(() => EnumFacilityFacilityType)
  facilityType!: "School" | "University" | "College";

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
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  secondaryContact?: string | null;

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
  @Field(() => EnumFacilityStatus)
  status!: "Pending" | "Approved" | "Active" | "Blocked" | "Removed";

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  zipCode!: string;
}
export { FacilityCreateInput };
