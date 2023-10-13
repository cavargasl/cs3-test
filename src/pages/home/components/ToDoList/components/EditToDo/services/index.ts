import { ToDoAdapter } from "@/pages/home/components/NewToDo/adapter";
import { ToDo } from "@/types";
import axios from "axios";

type EditToDo = {
  id: number;
  data: Partial<ToDo>;
};

export function editTodo({id, data}: EditToDo): Promise<ToDo>{
  return axios.put(`/todos/${id}`, data).then(res => ToDoAdapter(res.data))
}