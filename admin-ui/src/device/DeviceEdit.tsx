import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import { FacilityTitle } from "../facility/FacilityTitle";
import { UserTitle } from "../user/UserTitle";

export const DeviceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Device ID" source="deviceId" />
        <SelectInput
          source="deviceType"
          label="Device Type"
          choices={[
            { label: "KeyStone", value: "KeyStone" },
            { label: "KeyTab", value: "KeyTab" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceInput
          source="facility.id"
          reference="Facility"
          label="facility_id"
        >
          <SelectInput optionText={FacilityTitle} />
        </ReferenceInput>
        <TextInput label="Manufacturer" source="manufacturer" />
        <TextInput label="Model" source="model" />
        <TextInput label="Size" source="size" />
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "pending", value: "Pending" },
            { label: "approved", value: "Approved" },
            { label: "active", value: "Active" },
            { label: "blocked", value: "Blocked" },
            { label: "removed", value: "Removed" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceInput source="user.id" reference="User" label="user_id">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
