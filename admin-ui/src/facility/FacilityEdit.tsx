import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { CustomerTitle } from "../customer/CustomerTitle";
import { DeviceTitle } from "../device/DeviceTitle";

export const FacilityEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Address Line 1" source="addressLine_1" />
        <TextInput label="Address Line 2" source="addressLine_2" />
        <TextInput label="Address Line 3" source="addressLine_3" />
        <TextInput label="City" source="city" />
        <TextInput label="Country" source="country" />
        <ReferenceInput
          source="customer.id"
          reference="Customer"
          label="customer_id"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
        <ReferenceInput source="device.id" reference="Device" label="device_id">
          <SelectInput optionText={DeviceTitle} />
        </ReferenceInput>
        <TextInput label="email" source="email" type="email" />
        <SelectInput
          source="facilityType"
          label="Facility Type"
          choices={[
            { label: "School", value: "School" },
            { label: "University", value: "University" },
            { label: "College", value: "College" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Name" source="name" />
        <TextInput label="Primary Contact" source="primaryContact" />
        <TextInput label="Secondary Contact" source="secondaryContact" />
        <TextInput label="State" source="state" />
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
        <TextInput label="Zip Code" source="zipCode" />
      </SimpleForm>
    </Edit>
  );
};
