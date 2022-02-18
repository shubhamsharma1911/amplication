import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CUSTOMER_TITLE_FIELD } from "./CustomerTitle";
import { DEVICE_TITLE_FIELD } from "../device/DeviceTitle";
import { FACILITY_TITLE_FIELD } from "../facility/FacilityTitle";

export const CustomerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Address Line 1" source="addressLine_1" />
        <TextField label="Address Line 2" source="addressLine_2" />
        <TextField label="Address Line 3" source="addressLine_3" />
        <TextField label="City" source="city" />
        <TextField label="Country " source="country" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="First name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last name" source="lastName" />
        <TextField label="Pincode" source="pincode" />
        <TextField label="State" source="state" />
        <TextField label="status" source="status" />
        <TextField label="Telephone" source="telephone" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Facility"
          target="CustomerId"
          label="Facilities"
        >
          <Datagrid rowClick="show">
            <TextField label="Address Line 1" source="addressLine_1" />
            <TextField label="Address Line 2" source="addressLine_2" />
            <TextField label="Address Line 3" source="addressLine_3" />
            <TextField label="City" source="city" />
            <TextField label="Country" source="country" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="customer_id"
              source="customer.id"
              reference="Customer"
            >
              <TextField source={CUSTOMER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="device_id"
              source="device.id"
              reference="Device"
            >
              <TextField source={DEVICE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="email" source="email" />
            <TextField label="Facility Type" source="facilityType" />
            <TextField label="ID" source="id" />
            <TextField label="Name" source="name" />
            <TextField label="Primary Contact" source="primaryContact" />
            <TextField label="Secondary Contact" source="secondaryContact" />
            <TextField label="State" source="state" />
            <TextField label="Status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Zip Code" source="zipCode" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="User" target="CustomerId" label="Users">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="customer_id"
              source="customer.id"
              reference="Customer"
            >
              <TextField source={CUSTOMER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="device_id"
              source="device.id"
              reference="Device"
            >
              <TextField source={DEVICE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Email" source="email" />
            <ReferenceField
              label="facility_id"
              source="facility.id"
              reference="Facility"
            >
              <TextField source={FACILITY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="First Name" source="firstName" />
            <TextField label="ID" source="id" />
            <TextField label="Last Name" source="lastName" />
            <TextField label="Phone Number" source="phoneNumber" />
            <TextField label="Roles" source="roles" />
            <TextField label="Roll Number" source="rollNumber" />
            <TextField label="Status " source="status" />
            <TextField label="type" source="type" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Username" source="username" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
