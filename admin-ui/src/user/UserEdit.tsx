import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  PasswordInput,
  SelectArrayInput,
} from "react-admin";

import { CustomerTitle } from "../customer/CustomerTitle";
import { DeviceTitle } from "../device/DeviceTitle";
import { FacilityTitle } from "../facility/FacilityTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
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
        <TextInput label="Email" source="email" type="email" />
        <ReferenceInput
          source="facility.id"
          reference="Facility"
          label="facility_id"
        >
          <SelectInput optionText={FacilityTitle} />
        </ReferenceInput>
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <PasswordInput label="Password" source="password" />
        <TextInput label="Phone Number" source="phoneNumber" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Roll Number" source="rollNumber" />
        <SelectInput
          source="status"
          label="Status "
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
        <SelectInput
          source="type"
          label="type"
          choices={[
            { label: "student", value: "Student" },
            { label: "teacher", value: "Teacher" },
            { label: "manager", value: "Manager" },
            { label: "parent", value: "Parent" },
            { label: "volunteer", value: "Volunteer" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
