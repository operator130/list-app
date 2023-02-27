import React from 'react';
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';

function Todo({task, completed}) {
    return (
        <ListItem>
            <Checkbox tabIndex={-1} checked={completed} />
        <ListItemText style={{textDecoration: completed ? 'line-through' : 'none'}} >
                {task}
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton aria-label='Edit'>
                    <EditIcon />
                </IconButton>
                <IconButton aria-label='Delete'>
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
      </ListItem>
    );
}

export default Todo;