import { FacilityWhereInput } from "./FacilityWhereInput";
import { FacilityOrderByInput } from "./FacilityOrderByInput";

export type FacilityFindManyArgs = {
  where?: FacilityWhereInput;
  orderBy?: FacilityOrderByInput;
  skip?: number;
  take?: number;
};
