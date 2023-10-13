import { ApiToDo, ToDo } from "@/types";

export function ToDoAdapter(data: ApiToDo): ToDo {
  return {
    id: data.id,
    title: data.todo,
    completed: data.completed,
    userId: data.userId,
  }
}