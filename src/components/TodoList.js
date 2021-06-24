import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  marginRight: {
    // margin: theme.spacing(1),
    marginRight: theme.spacing(3),
  },
}));

const TodoList = ({ todos, deleteTodo }) => {
  const classes = useStyles();

  return (
    <List>
      {todos.map((todo, index) => (
        <ListItem
          key={index.toString()}
          dense
          button
          className={classes.marginRight}
        >
          <ListItemText primary={todo.id} />
          <ListItemText primary={todo.title} />
          <ListItemSecondaryAction>
            <IconButton
              aria-label="Delete"
              onClick={() => {
                deleteTodo(index);
              }}
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default TodoList;
