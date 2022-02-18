import { Device as TDevice } from "../api/device/Device";

export const DEVICE_TITLE_FIELD = "deviceId";

export const DeviceTitle = (record: TDevice): string => {
  return record.deviceId || record.id;
};
