import React from 'react';
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Todo from './Todo';

function TodoList(props) {
    return (
      <Paper>
        <List>
          {props.todos.map((todo) => (
            <>
              <Todo task={todo.task} key={todo.id} completed={todo.completed} />
              <Divider />
            </>
          ))}
        </List>
      </Paper>
    );
}

export default TodoList;