import * as React from "react";
import { Typography, Card, CardActions, CardContent, CardHeader } from '@material-ui/core';
import {  List,  ListProps, DateField, TextField,  TextInput, useListContext,  EditButton } from "react-admin";

const postFilters = [
  <TextInput label="Search" source="q" alwaysOn />,
  <TextInput label="Name" source="name" defaultValue="Rule #1" />,
];
const Aside = () => (
  <div style={{ width: 200, margin: '1em' }}>
      <Typography variant="h6">Post details</Typography>
      <Typography variant="body2">
          Posts will only be published once an editor approves them
      </Typography>
  </div>
);
const cardStyle = {
  width: 300,
  minHeight: 200,
  margin: '0.5em',
  display: 'inline-block',
  verticalAlign: 'top'
};
const CommentGrid = () => {
  const { ids, data, basePath } = useListContext();
  return (
      <div style={{ margin: '1em' }}>
      {ids.map(id =>
          <Card key={id} style={cardStyle}>
              <CardHeader
                  title={<TextField record={data[id]} source="name" />}
                  subheader={<DateField record={data[id]} source="createdAt" />}
              
              />
              <CardContent>
                  <TextField record={data[id]} source="id" />
              </CardContent>
            
              <CardActions style={{ textAlign: 'right' }}>
                  <EditButton resource="tags" basePath={basePath} record={data[id]} />
              </CardActions>
          </Card>
      )}
      </div>
  );
};

export const TagList = (props: ListProps) => (
  <List title="All Tags" 
  filters={postFilters}
  aside={<Aside />}
  {...props}>
      <CommentGrid />
  </List>
);
