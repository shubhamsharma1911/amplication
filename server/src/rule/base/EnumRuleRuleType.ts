import { Provider } from "../../provider/base/Provider";
import { registerEnumType } from "@nestjs/graphql";

export enum EnumRuleRuleType {
  Provider = "Provider",
  ContentType = "ContentType",
  Language = "Language",
}

registerEnumType(EnumRuleRuleType, {
  name: "EnumRuleRuleType",
});
