import { FacilityWhereUniqueInput } from "../facility/FacilityWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type RuleWhereInput = {
  facilityId?: FacilityWhereUniqueInput;
  filter?: StringNullableFilter;
  id?: StringFilter;
  rule?: JsonFilter;
  ruleType?: "Provider" | "ContentType" | "Language";
};
