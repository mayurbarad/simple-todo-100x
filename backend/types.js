// to add todo
//  data {
//     title : string
//     description : string
//  }

// to get todo - nothing to validate

// to mark as done
// id : string

const zod = require("zod");

const createTodo = zod.object({
  title: zod.string(),
  description: zod.string(),
});

const updateTodo = zod.object({
  id: zod.string(),
});

module.exports = {
  createTodo: createTodo,
  updateTodo: updateTodo,
};
