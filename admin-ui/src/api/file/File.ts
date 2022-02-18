import { Content } from "../content/Content";

export type File = {
  available: boolean;
  checksum: string;
  contentId?: Content;
  createdAt: Date;
  fileExt: string;
  fileSize: string;
  id: string;
  language: string;
  name: string | null;
  thumbnail: string | null;
  updatedAt: Date;
};
