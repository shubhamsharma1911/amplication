import { SortOrder } from "../../util/SortOrder";

export type DeviceOrderByInput = {
  createdAt?: SortOrder;
  deviceId?: SortOrder;
  deviceType?: SortOrder;
  facilityId?: SortOrder;
  id?: SortOrder;
  manufacturer?: SortOrder;
  model?: SortOrder;
  size?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
