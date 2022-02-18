import { Rule as TRule } from "../api/rule/Rule";

export const RULE_TITLE_FIELD = "filter";

export const RuleTitle = (record: TRule): string => {
  return record.filter || record.id;
};
