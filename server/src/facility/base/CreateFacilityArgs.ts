import { ArgsType, Field } from "@nestjs/graphql";
import { FacilityCreateInput } from "./FacilityCreateInput";

@ArgsType()
class CreateFacilityArgs {
  @Field(() => FacilityCreateInput, { nullable: false })
  data!: FacilityCreateInput;
}

export { CreateFacilityArgs };
