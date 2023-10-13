import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/Select'
import { filterTodos } from '@/redux/slice/todos'
import { ToDoList } from '@/types'
import { Dispatch } from '@reduxjs/toolkit'
import { useEffect, useState } from 'react'

type Filters = 'All' | 'Available' | 'Unavailable'
const filters: Filters[] = ["All", "Available", "Unavailable"]

type SortingProps = {
  todosList: ToDoList | undefined
  dispatch: Dispatch
}

function sortTodosByStatus({ todos }: Pick<ToDoList, "todos">, filter: Filters) {
  return [...todos].sort((a, b) => {
    if (filter === 'Available') return a.completed === b.completed ? 0 : a.completed ? -1 : 1;
    if (filter === 'Unavailable') return a.completed === b.completed ? 0 : a.completed ? 1 : -1;
    return 0;
  });
}

export default function Sorting({ todosList, dispatch }: SortingProps) {
  const [filter, setFilter] = useState<Filters>('All')

  useEffect(() => {
    if (todosList) {
      dispatch(filterTodos(sortTodosByStatus(todosList, filter)))
    }
  }, [dispatch, filter, todosList])

  return (
    <Select
      value={filter}
      onValueChange={(value: Filters) => {
        setFilter(value)
      }}
    >
      <SelectTrigger className="h-7 w-[120px] rounded-s-none">
        <SelectValue placeholder={filter} />
      </SelectTrigger>
      <SelectContent position="item-aligned">
        {
          filters.map(filter => (
            <SelectItem key={filter} value={filter}>{filter}</SelectItem>
          ))
        }
      </SelectContent>
    </Select>
  )
}
