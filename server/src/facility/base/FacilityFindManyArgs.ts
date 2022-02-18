import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FacilityWhereInput } from "./FacilityWhereInput";
import { Type } from "class-transformer";
import { FacilityOrderByInput } from "./FacilityOrderByInput";

@ArgsType()
class FacilityFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => FacilityWhereInput,
  })
  @Field(() => FacilityWhereInput, { nullable: true })
  @Type(() => FacilityWhereInput)
  where?: FacilityWhereInput;

  @ApiProperty({
    required: false,
    type: FacilityOrderByInput,
  })
  @Field(() => FacilityOrderByInput, { nullable: true })
  @Type(() => FacilityOrderByInput)
  orderBy?: FacilityOrderByInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { FacilityFindManyArgs };
