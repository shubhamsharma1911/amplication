import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  TextInput,
  ReferenceInput,
} from "react-admin";
import { ProviderTitle } from "../provider/ProviderTitle";

export const ContentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="contentType"
          label="Content Type"
          choices={[
            { label: "video", value: "Video" },
            { label: "audio", value: "Audio" },
            { label: "ebook", value: "Ebook" },
            { label: "game", value: "Game" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Description " multiline source="description" />
        <TextInput label="has_prerequiste" source="hasPrerequiste" />
        <TextInput label="parent" source="parent" />
        <ReferenceInput
          source="provider.id"
          reference="Provider"
          label="Provider"
        >
          <SelectInput optionText={ProviderTitle} />
        </ReferenceInput>
        <TextInput label="related" source="related" />
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
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
