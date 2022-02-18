import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { FacilityTitle } from "../facility/FacilityTitle";

export const RuleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="facility.id"
          reference="Facility"
          label="facility_id"
        >
          <SelectInput optionText={FacilityTitle} />
        </ReferenceInput>
        <TextInput label="Filter" source="filter" />
        <div />
        <SelectInput
          source="ruleType"
          label="Rule type"
          choices={[
            { label: "provider", value: "Provider" },
            { label: "contentType", value: "ContentType" },
            { label: "language", value: "Language" },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
