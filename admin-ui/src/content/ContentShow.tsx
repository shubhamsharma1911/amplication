import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { CONTENT_TITLE_FIELD } from "./ContentTitle";
import { PROVIDER_TITLE_FIELD } from "../provider/ProviderTitle";

export const ContentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField reference="File" target="ContentId" label="Files">
          <Datagrid rowClick="show">
            <BooleanField label="Available" source="available" />
            <TextField label="Checksum" source="checksum" />
            <ReferenceField
              label="content_id"
              source="content.id"
              reference="Content"
            >
              <TextField source={CONTENT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="file_ext" source="fileExt" />
            <TextField label="File Size" source="fileSize" />
            <TextField label="ID" source="id" />
            <TextField label="language" source="language" />
            <TextField label="Name" source="name" />
            <TextField label="Thumbnail " source="thumbnail" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
