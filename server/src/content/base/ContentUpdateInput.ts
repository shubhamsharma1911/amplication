import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumContentContentType } from "./EnumContentContentType";
import { IsEnum, IsOptional, IsString, ValidateNested } from "class-validator";
import { ProviderWhereUniqueInput } from "../../provider/base/ProviderWhereUniqueInput";
import { Type } from "class-transformer";
import { EnumContentStatus } from "./EnumContentStatus";
@InputType()
class ContentUpdateInput {
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
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  hasPrerequiste?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  parent?: string | null;

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
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  related?: string | null;

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
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string;
}
export { ContentUpdateInput };
