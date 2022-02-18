import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FacilityWhereUniqueInput } from "../../facility/base/FacilityWhereUniqueInput";
import { ValidateNested, IsOptional, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { EnumRuleRuleType } from "./EnumRuleRuleType";
@InputType()
class RuleWhereInput {
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
  facilityId?: FacilityWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  filter?: StringNullableFilter;

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
    type: JsonFilter,
  })
  @Type(() => JsonFilter)
  @IsOptional()
  @Field(() => JsonFilter, {
    nullable: true,
  })
  rule?: JsonFilter;

  @ApiProperty({
    required: false,
    enum: EnumRuleRuleType,
  })
  @IsEnum(EnumRuleRuleType)
  @IsOptional()
  @Field(() => EnumRuleRuleType, {
    nullable: true,
  })
  ruleType?: "Provider" | "ContentType" | "Language";
}
export { RuleWhereInput };
