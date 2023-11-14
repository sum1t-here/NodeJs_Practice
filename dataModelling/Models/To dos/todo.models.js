import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    // as many users are using the applications we also need to store information of the user who made the todo
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // this check is compulsory with the above type
    },
    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubTodo',
      },
    ], // Array of sub-todos
  },
  { timestamps: true }
);

export const Todo = mongoose.model('Todo', todoSchema);
