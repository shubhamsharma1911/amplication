import { Facility } from "../facility/Facility";
import { JsonValue } from "type-fest";

export type Rule = {
  createdAt: Date;
  facilityId?: Facility;
  filter: string | null;
  id: string;
  rule: JsonValue;
  ruleType?: "Provider" | "ContentType" | "Language";
  updatedAt: Date;
};
