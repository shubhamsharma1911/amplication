import { ArgsType, Field } from "@nestjs/graphql";
import { RuleWhereUniqueInput } from "./RuleWhereUniqueInput";

@ArgsType()
class RuleFindUniqueArgs {
  @Field(() => RuleWhereUniqueInput, { nullable: false })
  where!: RuleWhereUniqueInput;
}

export { RuleFindUniqueArgs };
