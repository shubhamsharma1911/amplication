import { ContentWhereUniqueInput } from "../content/ContentWhereUniqueInput";

export type FileCreateInput = {
  available: boolean;
  checksum: string;
  contentId: ContentWhereUniqueInput;
  fileExt: string;
  fileSize: string;
  language: string;
  name?: string | null;
  thumbnail?: string | null;
};
