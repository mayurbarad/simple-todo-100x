const mongoose = require("mongoose");

// mongoose schema
//  todo {
//     title : string,
//     description : string,
//     completed : boolean
//  }

mongoose.connect(
  "mongodb+srv://mayurbarad:CnatB0zsYkMxMc8L@cluster0.whzaa3n.mongodb.net/todos"
);

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

// it is table which has todo name
const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo,
};
