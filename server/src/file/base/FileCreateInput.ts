import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsBoolean,
  IsString,
  ValidateNested,
  IsOptional,
} from "class-validator";
import { ContentWhereUniqueInput } from "../../content/base/ContentWhereUniqueInput";
import { Type } from "class-transformer";
@InputType()
class FileCreateInput {
  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  available!: boolean;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  checksum!: string;

  @ApiProperty({
    required: true,
    type: () => ContentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ContentWhereUniqueInput)
  @Field(() => ContentWhereUniqueInput)
  contentId!: ContentWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  fileExt!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  fileSize!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  language!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  thumbnail?: string | null;
}
export { FileCreateInput };
