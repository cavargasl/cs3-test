import { ToDoAdapter } from "@/pages/home/components/NewToDo/adapter";
import { ToDo } from "@/types";
import axios from "axios";

export function editTodo(data: ToDo): Promise<ToDo>{
  return axios.put(`/todos/${data.id}`, data.title).then(res => ToDoAdapter(res.data))
}