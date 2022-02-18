import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ContentTitle } from "../content/ContentTitle";

export const FileCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="Available" source="available" />
        <TextInput label="Checksum" source="checksum" />
        <ReferenceInput
          source="content.id"
          reference="Content"
          label="content_id"
        >
          <SelectInput optionText={ContentTitle} />
        </ReferenceInput>
        <TextInput label="file_ext" source="fileExt" />
        <TextInput label="File Size" source="fileSize" />
        <TextInput label="language" source="language" />
        <TextInput label="Name" source="name" />
        <TextInput label="Thumbnail " source="thumbnail" />
      </SimpleForm>
    </Create>
  );
};
