import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { FACILITY_TITLE_FIELD } from "../facility/FacilityTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const DeviceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Device ID" source="deviceId" />
        <TextField label="Device Type" source="deviceType" />
        <ReferenceField
          label="facility_id"
          source="facility.id"
          reference="Facility"
        >
          <TextField source={FACILITY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="Manufacturer" source="manufacturer" />
        <TextField label="Model" source="model" />
        <TextField label="Size" source="size" />
        <TextField label="Status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="user_id" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
