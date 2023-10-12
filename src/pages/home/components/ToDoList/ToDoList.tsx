import { IconDelete } from "@/components/Icons";
import { Button } from "@/components/ui/Button";
import { addListTodos, selectTodos } from "@/redux/slice/todos";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import EditToDo from "./components/EditToDo/EditToDo";
import MarkCheck from "./components/EditToDo/MarkCheck";
import { getTodos } from "./services";

export default function ToDoList() {
  const dispatch = useDispatch();
  const todosList = useSelector(selectTodos);
  const { data, isLoading, isError } = useQuery({ queryKey: ['todos'], queryFn: getTodos })

  if (isLoading) return <p className="text-center font-medium text-xl">Loading...</p>
  if (isError) return <p className="text-center font-medium text-xl text-red-500">{"Ops... something has gone wrong"}</p>
  if (!data) return <p className="text-center font-medium text-xl">List of todos is empty</p>
  if (data) {
    dispatch(addListTodos(data));
  }
  return (
    <ul className="flex flex-col gap-2" data-testid="to-do-list">
      {todosList.todos.map((task) => (
        <li
          className="bg-secondary text-secondary-foreground rounded-md p-2 pr-0 flex gap-2 items-center"
          key={task.id}
        >
          <MarkCheck todo={task} />
          <div className="truncate w-full" title={task.title}>{task.title}</div>
          <div className="flex">
            <EditToDo todo={task} />
            <Button variant={"ghost"} className="hover:bg-transparent text-secondary-foreground" size={"icon"} aria-label="delete task">
              <IconDelete className='h-5 w-5' />
            </Button>
          </div>
        </li>
      ))}
    </ul>
  )
}
