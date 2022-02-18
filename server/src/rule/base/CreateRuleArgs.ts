import { ArgsType, Field } from "@nestjs/graphql";
import { RuleCreateInput } from "./RuleCreateInput";

@ArgsType()
class CreateRuleArgs {
  @Field(() => RuleCreateInput, { nullable: false })
  data!: RuleCreateInput;
}

export { CreateRuleArgs };
