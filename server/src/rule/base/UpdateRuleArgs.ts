import { ArgsType, Field } from "@nestjs/graphql";
import { RuleWhereUniqueInput } from "./RuleWhereUniqueInput";
import { RuleUpdateInput } from "./RuleUpdateInput";

@ArgsType()
class UpdateRuleArgs {
  @Field(() => RuleWhereUniqueInput, { nullable: false })
  where!: RuleWhereUniqueInput;
  @Field(() => RuleUpdateInput, { nullable: false })
  data!: RuleUpdateInput;
}

export { UpdateRuleArgs };
