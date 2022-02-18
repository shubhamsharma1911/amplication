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

import { PROVIDER_TITLE_FIELD } from "./ProviderTitle";

export const ProviderShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Address Line 1" source="addressLine_1" />
        <TextField label="Address Line 2" source="addressLine_2" />
        <TextField label="Address Line 3" source="addressLine_3" />
        <TextField label="City" source="city" />
        <TextField label="Country" source="country" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description " source="description" />
        <TextField label="Email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Pincode" source="pincode" />
        <TextField label="State" source="state" />
        <TextField label="Status" source="status" />
        <TextField label="Telephone" source="Telephone" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Content"
          target="ProviderId"
          label="Contents"
        >
          <Datagrid rowClick="show">
            <TextField label="Content Type" source="contentType" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description " source="description" />
            <TextField label="has_prerequiste" source="hasPrerequiste" />
            <TextField label="ID" source="id" />
            <TextField label="parent" source="parent" />
            <ReferenceField
              label="Provider"
              source="provider.id"
              reference="Provider"
            >
              <TextField source={PROVIDER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="related" source="related" />
            <TextField label="Status" source="status" />
            <TextField label="Title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
