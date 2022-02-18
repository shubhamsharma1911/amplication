import { FacilityWhereUniqueInput } from "../facility/FacilityWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type RuleUpdateInput = {
  facilityId?: FacilityWhereUniqueInput;
  filter?: string | null;
  rule?: InputJsonValue;
  ruleType?: "Provider" | "ContentType" | "Language";
};
