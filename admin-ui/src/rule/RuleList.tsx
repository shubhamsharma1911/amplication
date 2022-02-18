import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { FACILITY_TITLE_FIELD } from "../facility/FacilityTitle";

export const RuleList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Rules"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
