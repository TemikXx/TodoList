import React, { useState } from "react";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

function AddTodo({ onDobav }) {
  const [dob, setDob] = useState('');

  function submitHandler(event) {
    event.preventDefault();
    onDobav(dob);
    setDob('');
  }

  return (
    <form style={{ marginLeft: 200 }} onSubmit={submitHandler}>
      <Input
        placeholder="Добавить Todo"
        inputProps={{ "aria-label": "description" }}
        dob={dob}
        onChange={(event) => setDob(event.target.value)}
      />

      <Button
        variant="contained"
        color="primary"
        type="submit"
        style={{ marginLeft: "5px" }}
      >
        Добавить
      </Button>
    </form>
  );
}

export default AddTodo;
