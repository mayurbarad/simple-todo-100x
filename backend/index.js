const express = require("express");
const { createTodo } = require("./types");
const { updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/todos", async function (req, res) {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      message: "Invalid inputs!",
    });
    return;
  }
  // provided valid inputs
  // put it in mongoDB under todo table
  const response = await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });

  res.json({
    message: "todo created!",
  });
});

app.get("/todos", async function (req, res) {
  const todos = await todo.find({});
  res.json({
    todos,
  });
});

app.put("/completed", async function (req, res) {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      message: "Invalid inputs!",
    });
    return;
  }

  // update it in mongoDB
  const id = req.body.id;
  await todo.updateOne(
    { _id: id },
    {
      $set: {
        completed: true,
      },
    }
  );

  res.json({
    message: "todo marked as completed!",
  });
});

app.listen(3000);
