import { ApiToDo, ToDo } from "@/types";
import axios from "axios";

type DeletedToDo = ApiToDo & {
  isDeleted: boolean;
};

export function deleteTodo({ id }: Pick<ToDo, "id">): Promise<DeletedToDo> {
  return axios.delete(`/todos/${id}`).then(({ data }) => data);
}