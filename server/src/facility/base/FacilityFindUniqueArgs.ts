import { ArgsType, Field } from "@nestjs/graphql";
import { FacilityWhereUniqueInput } from "./FacilityWhereUniqueInput";

@ArgsType()
class FacilityFindUniqueArgs {
  @Field(() => FacilityWhereUniqueInput, { nullable: false })
  where!: FacilityWhereUniqueInput;
}

export { FacilityFindUniqueArgs };
