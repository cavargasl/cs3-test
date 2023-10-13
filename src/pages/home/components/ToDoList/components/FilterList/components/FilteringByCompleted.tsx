import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/Select'
import { filterTodos } from '@/redux/slice/todos'
import { Filters } from '@/types'
import { Dispatch } from '@reduxjs/toolkit'
import { useEffect, useState } from 'react'

const filters: Filters[] = ["All", "Available", "Unavailable"]

type SortingProps = {
  dispatch: Dispatch
}

export default function FilteringByCompleted({ dispatch }: SortingProps) {
  const [filter, setFilter] = useState<Filters>('All')

  useEffect(() => {
    dispatch(filterTodos({ byCompleted: filter }))
  }, [dispatch, filter])

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
