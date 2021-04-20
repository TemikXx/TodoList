import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
const styles = {
  li: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "2px solid MidnightBlue",
    marginBottom: "5px",
    backgroundColor: "DeepSkyBlue",
    borderRadius:'5px'
  },
};
//не работают стили
function Todo({ todo, idx, onChange, deleteTodo, importantTodo }) {
  const adding = [];
  const onemore = [];
  if (todo.complited) {
    adding.push("done");
  }
  if (todo.important) {
    onemore.push("important");
    //setTodoesi(todoesi.unshift(...todoesi.splice(todo=>todo.id,1)))
  }

  return (
    <li style={styles.li} className={onemore.join("")}>
      <span className={adding.join("")} >
        <button
          style={{ marginLeft: "10px" }}
          onClick={() => importantTodo(todo.id)}
          onPress
        >
          &#128293;
        </button>
        <Checkbox
          onChange={() => onChange(todo.id)}
          color="primary"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
        <strong>{idx + 1}</strong>
        {todo.title}
      </span>
    <span>
      <button
        style={{ marginRight: "10px" }}
        onClick={() => deleteTodo(todo.id)}
      >
        &#10060;
      </button>
      </span>
    </li>
  );
}

export default Todo;
