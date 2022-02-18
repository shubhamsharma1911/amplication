import { ArgsType, Field } from "@nestjs/graphql";
import { FacilityWhereUniqueInput } from "./FacilityWhereUniqueInput";
import { FacilityUpdateInput } from "./FacilityUpdateInput";

@ArgsType()
class UpdateFacilityArgs {
  @Field(() => FacilityWhereUniqueInput, { nullable: false })
  where!: FacilityWhereUniqueInput;
  @Field(() => FacilityUpdateInput, { nullable: false })
  data!: FacilityUpdateInput;
}

export { UpdateFacilityArgs };
