import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumContentContentType } from "./EnumContentContentType";
import {
  IsEnum,
  IsDate,
  IsString,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { File } from "../../file/base/File";
import { Provider } from "../../provider/base/Provider";
import { EnumContentStatus } from "./EnumContentStatus";
@ObjectType()
class Content {
  @ApiProperty({
    required: true,
    enum: EnumContentContentType,
  })
  @IsEnum(EnumContentContentType)
  @Field(() => EnumContentContentType, {
    nullable: true,
  })
  contentType?: "Video" | "Audio" | "Ebook" | "Game";

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description!: string | null;

  @ApiProperty({
    required: false,
    type: () => [File],
  })
  @ValidateNested()
  @Type(() => File)
  @IsOptional()
  fileId?: Array<File>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  hasPrerequiste!: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  parent!: string | null;

  @ApiProperty({
    required: true,
    type: () => Provider,
  })
  @ValidateNested()
  @Type(() => Provider)
  provider?: Provider;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  related!: string | null;

  @ApiProperty({
    required: true,
    enum: EnumContentStatus,
  })
  @IsEnum(EnumContentStatus)
  @Field(() => EnumContentStatus, {
    nullable: true,
  })
  status?: "Pending" | "Approved" | "Active" | "Blocked" | "Removed";

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  title!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}
export { Content };
