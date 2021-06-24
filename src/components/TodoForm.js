import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import useInputState from "./useInputState";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const TodoForm = ({ saveTodo }) => {
  const { value, reset, onChange } = useInputState();

  const classes = useStyles();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        saveTodo(value);
        reset();
      }}
    >
      <TextField
        variant="outlined"
        placeholder="Add Todo List"
        margin="dense"
        onChange={onChange}
        value={value}
      />
      <Button
        type="submit"
        variant="contained"
        size="medium"
        color="primary"
        className={classes.margin}
      >
        Submit
      </Button>
    </form>
  );
};

export default TodoForm;
