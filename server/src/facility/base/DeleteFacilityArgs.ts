import { ArgsType, Field } from "@nestjs/graphql";
import { FacilityWhereUniqueInput } from "./FacilityWhereUniqueInput";

@ArgsType()
class DeleteFacilityArgs {
  @Field(() => FacilityWhereUniqueInput, { nullable: false })
  where!: FacilityWhereUniqueInput;
}

export { DeleteFacilityArgs };
