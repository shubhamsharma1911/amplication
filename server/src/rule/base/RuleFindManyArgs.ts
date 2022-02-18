import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RuleWhereInput } from "./RuleWhereInput";
import { Type } from "class-transformer";
import { RuleOrderByInput } from "./RuleOrderByInput";

@ArgsType()
class RuleFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => RuleWhereInput,
  })
  @Field(() => RuleWhereInput, { nullable: true })
  @Type(() => RuleWhereInput)
  where?: RuleWhereInput;

  @ApiProperty({
    required: false,
    type: RuleOrderByInput,
  })
  @Field(() => RuleOrderByInput, { nullable: true })
  @Type(() => RuleOrderByInput)
  orderBy?: RuleOrderByInput;

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

export { RuleFindManyArgs };
