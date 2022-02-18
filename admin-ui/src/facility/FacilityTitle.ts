import { Facility as TFacility } from "../api/facility/Facility";

export const FACILITY_TITLE_FIELD = "name";

export const FacilityTitle = (record: TFacility): string => {
  return record.name || record.id;
};
