import { ArgsType, Field } from "@nestjs/graphql";
import { RuleWhereUniqueInput } from "./RuleWhereUniqueInput";

@ArgsType()
class DeleteRuleArgs {
  @Field(() => RuleWhereUniqueInput, { nullable: false })
  where!: RuleWhereUniqueInput;
}

export { DeleteRuleArgs };
