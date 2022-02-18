import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";

import { CONTENT_TITLE_FIELD } from "../content/ContentTitle";

export const FileShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
