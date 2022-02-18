import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CustomerWhereUniqueInput } from "../../customer/base/CustomerWhereUniqueInput";
import { ValidateNested, IsOptional, IsString, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { DeviceWhereUniqueInput } from "../../device/base/DeviceWhereUniqueInput";
import { FacilityWhereUniqueInput } from "../../facility/base/FacilityWhereUniqueInput";
import { EnumUserStatus } from "./EnumUserStatus";
import { EnumUserType } from "./EnumUserType";
@InputType()
class UserCreateInput {
  @ApiProperty({
    required: false,
    type: () => CustomerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CustomerWhereUniqueInput)
  @IsOptional()
  @Field(() => CustomerWhereUniqueInput, {
    nullable: true,
  })
  customerId?: CustomerWhereUniqueInput | null;

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
    required: false,
    type: () => FacilityWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FacilityWhereUniqueInput)
  @IsOptional()
  @Field(() => FacilityWhereUniqueInput, {
    nullable: true,
  })
  facilityId?: FacilityWhereUniqueInput | null;

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
  lastName!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  password!: string;

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
  rollNumber?: string | null;

  @ApiProperty({
    required: true,
    enum: EnumUserStatus,
  })
  @IsEnum(EnumUserStatus)
  @Field(() => EnumUserStatus)
  status!: "Pending" | "Approved" | "Active" | "Blocked" | "Removed";

  @ApiProperty({
    required: true,
    enum: EnumUserType,
  })
  @IsEnum(EnumUserType)
  @Field(() => EnumUserType)
  type!: "Student" | "Teacher" | "Manager" | "Parent" | "Volunteer";

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  username!: string;
}
export { UserCreateInput };
