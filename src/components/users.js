import React from 'react';
import { List, Datagrid, TextField, EmailField } from 'react-admin';

export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="name" />
            <TextField source="email" />
            <TextField source="address.street" label="Street Address"/>
            <TextField source="phone" sortable={false}/>
            <TextField source="website" />
            <TextField source="company.name" label="Company Name"/>
        </Datagrid>
    </List>
);