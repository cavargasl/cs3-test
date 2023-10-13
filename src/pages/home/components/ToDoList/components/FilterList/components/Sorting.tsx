import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/Select'
import { filterTodos, selectTodos } from '@/redux/slice/todos'
import { ToDoList } from '@/types'
import { Dispatch } from '@reduxjs/toolkit'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

type Sorting = 'All' | 'Available' | 'Unavailable'
const sorting: Sorting[] = ["All", "Available", "Unavailable"]

type SortingProps = {
  dispatch: Dispatch
}

function sortTodosByStatus({ todos }: Pick<ToDoList, "todos">, sort: Sorting) {
  return [...todos].sort((a, b) => {
    if (sort === 'Available') return a.completed === b.completed ? 0 : a.completed ? -1 : 1;
    if (sort === 'Unavailable') return a.completed === b.completed ? 0 : a.completed ? 1 : -1;
    if (sort === 'All') return a.id - b.id
    return 0
  });
}

export default function Sorting({ dispatch }: SortingProps) {
  const todosList = useSelector(selectTodos)

  const [filter, setFilter] = useState<Sorting>('All')

  useEffect(() => {
    if (todosList) {
      dispatch(filterTodos(sortTodosByStatus(todosList, filter)))
    }
  }, [dispatch, filter])

  return (
    <Select
      value={filter}
      onValueChange={(value: Sorting) => {
        setFilter(value)
      }}
    >
      <SelectTrigger className="h-7 w-[120px] rounded-s-none">
        <SelectValue placeholder={filter} />
      </SelectTrigger>
      <SelectContent position="item-aligned">
        {
          sorting.map(sort => (
            <SelectItem key={sort} value={sort}>{sort}</SelectItem>
          ))
        }
      </SelectContent>
    </Select>
  )
}
