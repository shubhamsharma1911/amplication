import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FacilityWhereUniqueInput } from "../../facility/base/FacilityWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  IsJSON,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { GraphQLJSONObject } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { EnumRuleRuleType } from "./EnumRuleRuleType";
@InputType()
class RuleUpdateInput {
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
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  filter?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsJSON()
  @IsOptional()
  @Field(() => GraphQLJSONObject, {
    nullable: true,
  })
  rule?: InputJsonValue;

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
export { RuleUpdateInput };
