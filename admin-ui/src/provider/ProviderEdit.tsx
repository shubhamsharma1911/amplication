import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
} from "react-admin";

export const ProviderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Address Line 1" source="addressLine_1" />
        <TextInput label="Address Line 2" source="addressLine_2" />
        <TextInput label="Address Line 3" source="addressLine_3" />
        <TextInput label="City" source="city" />
        <TextInput label="Country" source="country" />
        <TextInput label="Description " multiline source="description" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Name" source="name" />
        <TextInput label="Pincode" source="pincode" />
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
        <TextInput label="Telephone" source="Telephone" />
      </SimpleForm>
    </Edit>
  );
};
