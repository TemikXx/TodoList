import React from "react";
import Todo from "../Todo/Todo";

const styles = {
  ul: {
    listStyle: "none",
    marginLeft: 200,
    marginRight: 500,
    padding: 0,
  },
};

function TodoList(props) {
  return (
    <ul style={styles.ul}>
      {props.todoesi.map((todo, idx) => {
        return (
          <Todo
            todo={todo}
            key={todo.id}
            idx={idx}
            onChange={props.onClicking}
            deleteTodo={props.onDeleteTodo}
            importantTodo={props.onImportantTodo}
          />
        );
      })}
    </ul>
  );
}

export default TodoList;
