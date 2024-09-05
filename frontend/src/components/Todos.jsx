//  todo = [
//     {
//         title,
//         description
//     }
//  ]

import { useState } from "react";

export function Todos(props) {
  const [todos, setTodos] = useState(props.todos);

  async function markAsDone(todoId) {
    const response = await fetch("http://localhost:3000/completed", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: todoId }),
    });

    const result = await response.json();
    if (response.ok) {
      // Update the state only if the backend request is successful
      const updatedTodos = todos.map((todo, i) => {
        return { ...todo, completed: true };
      });
      setTodos(updatedTodos);
    } else {
      console.error(result.message);
    }
  }
  return (
    <div>
      {todos.map(function (todo) {
        return (
          <div key={todo._id}>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button onClick={() => markAsDone(todo._id)}>
              {todo.completed ? "Done" : "Mark as done"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
