import { addListTodos, selectTodos } from "@/redux/slice/todos";
import { Filters, ToDo } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteToDo } from "./components/DeleteToDo";
import EditToDo from "./components/EditToDo/EditToDo";
import MarkCheck from "./components/EditToDo/MarkCheck";
import { FilterList } from "./components/FilterList";
import { getTodos } from "./services";

function filterTodos(todos: ToDo[], filter: Filters, title: string | undefined): ToDo[] {
  if (title) {
    todos = todos.filter((item) => item.title.toLowerCase().includes(title.toLowerCase()));
  }

  if (filter === 'Available') {
    todos = todos.filter((todo) => todo.completed);
  } else if (filter === 'Unavailable') {
    todos = todos.filter((todo) => !todo.completed);
  }

  return todos;
}

export default function ToDoList() {
  const dispatch = useDispatch();
  const todosList = useSelector(selectTodos);
  const { data, isLoading, isError } = useQuery({
    queryKey: ['todos'], queryFn: getTodos,
    initialData: todosList,
    refetchOnWindowFocus: false,
    staleTime: 0,
  })

  useEffect(() => {
    dispatch(addListTodos(data));
  }, [data, dispatch])

  if (isLoading) return <p className="text-center font-medium text-xl">Loading...</p>
  if (isError) return <p className="text-center font-medium text-xl text-danger">Ops... something has gone wrong</p>
  if (!data) return <p className="text-center font-medium text-xl">List of todos is empty</p>
  return (
    <section className="flex flex-col gap-2">
      <FilterList />
      <ul className="flex flex-col gap-2" data-testid="to-do-list">
        {filterTodos(todosList.todos, todosList.filter.byCompleted, todosList.filter.byTitle).map((task) => (
          <li
            className="bg-secondary text-secondary-foreground rounded-md p-2 pr-0 flex gap-2 items-center"
            key={task.id}
          >
            <MarkCheck todo={task} />
            <div className="truncate w-full" title={task.title}>{task.title}</div>
            <div className="flex">
              <EditToDo todo={task} />
              <DeleteToDo todo={task} />
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
