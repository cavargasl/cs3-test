import {  ApiToDoList, ToDoList } from "@/types";

export const getTodoAdapter = (data: ApiToDoList): ToDoList => {
  return {
    todos: data.todos.map(item => ({
      id: item.id,
      title: item.todo,
      completed: item.completed,
      userId: item.userId
    })),
    total: data.total,
    skip: Number(data.skip),
    limit: data.limit
  }
};