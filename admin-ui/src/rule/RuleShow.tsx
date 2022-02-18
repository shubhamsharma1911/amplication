import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import { FACILITY_TITLE_FIELD } from "../facility/FacilityTitle";

export const RuleShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="facility_id"
          source="facility.id"
          reference="Facility"
        >
          <TextField source={FACILITY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Filter" source="filter" />
        <TextField label="ID" source="id" />
        <TextField label="rule" source="rule" />
        <TextField label="Rule type" source="ruleType" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
