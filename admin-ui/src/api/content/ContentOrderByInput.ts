import { SortOrder } from "../../util/SortOrder";

export type ContentOrderByInput = {
  contentType?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  hasPrerequiste?: SortOrder;
  id?: SortOrder;
  parent?: SortOrder;
  providerId?: SortOrder;
  related?: SortOrder;
  status?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
