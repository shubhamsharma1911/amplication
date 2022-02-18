import { BooleanFilter } from "../../util/BooleanFilter";
import { StringFilter } from "../../util/StringFilter";
import { ContentWhereUniqueInput } from "../content/ContentWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type FileWhereInput = {
  available?: BooleanFilter;
  checksum?: StringFilter;
  contentId?: ContentWhereUniqueInput;
  fileExt?: StringFilter;
  fileSize?: StringFilter;
  id?: StringFilter;
  language?: StringFilter;
  name?: StringNullableFilter;
  thumbnail?: StringNullableFilter;
};
