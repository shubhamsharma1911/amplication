import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProviderWhereUniqueInput } from "../provider/ProviderWhereUniqueInput";

export type ContentWhereInput = {
  contentType?: "Video" | "Audio" | "Ebook" | "Game";
  description?: StringNullableFilter;
  hasPrerequiste?: StringNullableFilter;
  id?: StringFilter;
  parent?: StringNullableFilter;
  provider?: ProviderWhereUniqueInput;
  related?: StringNullableFilter;
  status?: "Pending" | "Approved" | "Active" | "Blocked" | "Removed";
  title?: StringFilter;
};
