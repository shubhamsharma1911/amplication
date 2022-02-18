import { SortOrder } from "../../util/SortOrder";

export type FileOrderByInput = {
  available?: SortOrder;
  checksum?: SortOrder;
  contentIdId?: SortOrder;
  createdAt?: SortOrder;
  fileExt?: SortOrder;
  fileSize?: SortOrder;
  id?: SortOrder;
  language?: SortOrder;
  name?: SortOrder;
  thumbnail?: SortOrder;
  updatedAt?: SortOrder;
};
