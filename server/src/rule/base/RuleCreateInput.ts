import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FacilityWhereUniqueInput } from "../../facility/base/FacilityWhereUniqueInput";
import {
  ValidateNested,
  IsString,
  IsOptional,
  IsJSON,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { GraphQLJSONObject } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { EnumRuleRuleType } from "./EnumRuleRuleType";
@InputType()
class RuleCreateInput {
  @ApiProperty({
    required: true,
    type: () => FacilityWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FacilityWhereUniqueInput)
  @Field(() => FacilityWhereUniqueInput)
  facilityId!: FacilityWhereUniqueInput;

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
    required: true,
  })
  @IsJSON()
  @Field(() => GraphQLJSONObject)
  rule!: InputJsonValue;

  @ApiProperty({
    required: true,
    enum: EnumRuleRuleType,
  })
  @IsEnum(EnumRuleRuleType)
  @Field(() => EnumRuleRuleType)
  ruleType!: "Provider" | "ContentType" | "Language";
}
export { RuleCreateInput };
