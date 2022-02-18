import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  BooleanField,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { CONTENT_TITLE_FIELD } from "../content/ContentTitle";

export const FileList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Files"}
      perPage={50}
      pagination={<Pagination />}
    >
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
    </List>
  );
};
