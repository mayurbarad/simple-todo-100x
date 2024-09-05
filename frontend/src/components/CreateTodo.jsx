import { useState } from "react";

export function CreateTodo() {
  // react-query - slightly un-optimal way, causes a lot of re-renders
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // function to handle submit todo logic
  async function handleClick() {
    const response = await fetch("http://localhost:3000/todos", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        description: description,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const json = response.json();
      alert("Todo added!");
    } else {
      alert("error adding Todo");
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="title"
        id="title"
        onChange={function (e) {
          const value = e.target.value;
          //   console.log(e.target);
          setTitle(value);
        }}
      />{" "}
      <br /> <br />
      <input
        type="text"
        placeholder="description"
        id="description"
        onChange={function (e) {
          const value = e.target.value;
          setDescription(value);
        }}
      />{" "}
      <br /> <br />
      <button onClick={handleClick}>Add a todo</button>
    </div>
  );
}
