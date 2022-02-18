import { SortOrder } from "../../util/SortOrder";

export type CustomerOrderByInput = {
  addressLine_1?: SortOrder;
  addressLine_2?: SortOrder;
  addressLine_3?: SortOrder;
  city?: SortOrder;
  country?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  pincode?: SortOrder;
  state?: SortOrder;
  status?: SortOrder;
  telephone?: SortOrder;
  updatedAt?: SortOrder;
};
