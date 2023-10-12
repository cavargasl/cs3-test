import axios from "axios";
import { ToDoList } from "@/types";
import { getTodoAdapter } from "../adapter";

export async function getTodos(): Promise<ToDoList> {
  return axios.get(`/todos?limit=5&skip=0`).then(res => getTodoAdapter(res.data))
}