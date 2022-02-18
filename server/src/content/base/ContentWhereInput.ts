import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumContentContentType } from "./EnumContentContentType";
import { IsEnum, IsOptional, ValidateNested } from "class-validator";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { Type } from "class-transformer";
import { StringFilter } from "../../util/StringFilter";
import { ProviderWhereUniqueInput } from "../../provider/base/ProviderWhereUniqueInput";
import { EnumContentStatus } from "./EnumContentStatus";
@InputType()
class ContentWhereInput {
  @ApiProperty({
    required: false,
    enum: EnumContentContentType,
  })
  @IsEnum(EnumContentContentType)
  @IsOptional()
  @Field(() => EnumContentContentType, {
    nullable: true,
  })
  contentType?: "Video" | "Audio" | "Ebook" | "Game";

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  description?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  hasPrerequiste?: StringNullableFilter;

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
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  parent?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => ProviderWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProviderWhereUniqueInput)
  @IsOptional()
  @Field(() => ProviderWhereUniqueInput, {
    nullable: true,
  })
  provider?: ProviderWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  related?: StringNullableFilter;

  @ApiProperty({
    required: false,
    enum: EnumContentStatus,
  })
  @IsEnum(EnumContentStatus)
  @IsOptional()
  @Field(() => EnumContentStatus, {
    nullable: true,
  })
  status?: "Pending" | "Approved" | "Active" | "Blocked" | "Removed";

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  title?: StringFilter;
}
export { ContentWhereInput };
