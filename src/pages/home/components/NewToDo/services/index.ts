import { ApiToDo, ToDo } from "@/types";
import axios from "axios";
import { ToDoAdapter } from "../adapter";

type NewTodo = Omit<ApiToDo, "id">;

export async function newTodoService(todo: NewTodo): Promise<ToDo> {
  return axios.post(`/todos/add`, todo).then(res => ToDoAdapter(res.data))
}