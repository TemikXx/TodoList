import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import { useState } from "react";
import AddTodo from "./components/AddTodo/AddTodo";

const styles = {
  h1: {
    marginLeft: 200,
    marginTop: 100,
  },
  div:{
    backgroundColor:"PaleTurquoise",
    width:'1100px', 
    marginLeft:'200px', 
    border: "7px solid MidnightBlue",
    marginBottom: "5px",
    marginTop:'2rem',
    paddingBottom:'20px',
    borderRadius:'15px'
  }
};
function App() {
  const [todoesi, setTodoesi] = useState([
    { id: 1, important: false, complited: false, title: "выполнить ТЗ" },
    { id: 2, important: false, complited: false, title: "Устроиться на работу" },
    { id: 3, important: false, complited: false, title: "Накопить на путевку в Амстердам" },
  ]);

  function deleteTodo(id) {
    setTodoesi(todoesi.filter((todo) => todo.id !== id));
  }

  function importantTodo(id) {
    //setTodoesi(todoesi.unshift(...todoesi.splice(todo=>todo.id,1)))
    setTodoesi(
      todoesi.map((todo) => {
        if (todo.id === id) {
          todo.important = !todo.important;
        }

        return todo;
      })
    );
  }

  function clickingChekbox(id) {
    setTodoesi(
      todoesi.map((todo) => {
        if (todo.id === id) {
          todo.complited = !todo.complited;
        }
        return todo;
      })
    );
  }

  function createTodo(title) {
    setTodoesi(
      todoesi.concat([
        {
          title,
          id: Date.now(),
          complited: false,
          important: false,
        },
      ])
    );
  }

  return (
    
    <div style={styles.div}>
      <h1 style={styles.h1}>TodoList App</h1>
      <AddTodo onDobav={createTodo} />
      {todoesi.length ? (
        <TodoList
          todoesi={todoesi}
          onClicking={clickingChekbox}
          onDeleteTodo={deleteTodo}
          onImportantTodo={importantTodo}
        />
      ) : (
        <h2 style={{ marginLeft: 200 }}>Все задачи выполнены!</h2>
      )}
   </div>
  );
}

export default App;
