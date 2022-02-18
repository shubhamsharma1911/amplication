import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  ValidateNested,
  IsString,
  IsOptional,
  IsJSON,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { Facility } from "../../facility/base/Facility";
import { GraphQLJSONObject } from "graphql-type-json";
import { JsonValue } from "type-fest";
import { EnumRuleRuleType } from "./EnumRuleRuleType";
@ObjectType()
class Rule {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: () => Facility,
  })
  @ValidateNested()
  @Type(() => Facility)
  facilityId?: Facility;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  filter!: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
  })
  @IsJSON()
  @Field(() => GraphQLJSONObject)
  rule!: JsonValue;

  @ApiProperty({
    required: true,
    enum: EnumRuleRuleType,
  })
  @IsEnum(EnumRuleRuleType)
  @Field(() => EnumRuleRuleType, {
    nullable: true,
  })
  ruleType?: "Provider" | "ContentType" | "Language";

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}
export { Rule };
