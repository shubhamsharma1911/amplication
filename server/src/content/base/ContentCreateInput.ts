import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumContentContentType } from "./EnumContentContentType";
import { IsEnum, IsString, IsOptional, ValidateNested } from "class-validator";
import { ProviderWhereUniqueInput } from "../../provider/base/ProviderWhereUniqueInput";
import { Type } from "class-transformer";
import { EnumContentStatus } from "./EnumContentStatus";
@InputType()
class ContentCreateInput {
  @ApiProperty({
    required: true,
    enum: EnumContentContentType,
  })
  @IsEnum(EnumContentContentType)
  @Field(() => EnumContentContentType)
  contentType!: "Video" | "Audio" | "Ebook" | "Game";

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
    required: true,
    type: () => ProviderWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProviderWhereUniqueInput)
  @Field(() => ProviderWhereUniqueInput)
  provider!: ProviderWhereUniqueInput;

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
    required: true,
    enum: EnumContentStatus,
  })
  @IsEnum(EnumContentStatus)
  @Field(() => EnumContentStatus)
  status!: "Pending" | "Approved" | "Active" | "Blocked" | "Removed";

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  title!: string;
}
export { ContentCreateInput };
