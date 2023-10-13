import { ToDoList } from "@/types";
import { useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import Filtering from "./components/Filtering";
import Sorting from "./components/Sorting";

export default function FilterList() {
  const QueryClient = useQueryClient();
  const todosList: ToDoList | undefined = QueryClient.getQueryData(['todos']);
  const dispatch = useDispatch();

  return (
    <div className="flex">
      <Filtering dispatch={dispatch} todosList={todosList} />
      <Sorting dispatch={dispatch} todosList={todosList} />
    </div>
  )
}
