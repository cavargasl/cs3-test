import { IconClose } from '@/components/Icons'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { useDebounce } from '@/hooks/useDebonce'
import { filterTodos } from '@/redux/slice/todos'
import { ToDoList } from '@/types'
import { Dispatch } from '@reduxjs/toolkit'
import { useEffect, useState } from 'react'

type FilteringProps = {
  todosList: ToDoList | undefined
  dispatch: Dispatch
}
export default function Filtering({ todosList, dispatch }: FilteringProps) {
  const [value, setValue] = useState<string>()

  const debouncedValue = useDebounce(value, 500);

  useEffect(() => {
    if (debouncedValue && todosList) {
      dispatch(filterTodos(todosList.todos.filter((item) => item.title.toLowerCase().includes(debouncedValue.toLowerCase()))))
    }
    if (!debouncedValue && todosList) {
      dispatch(filterTodos(todosList.todos))
    }
  }, [debouncedValue, dispatch, todosList])

  return (
    <div className="relative w-full">
      <Input className="h-7 pr-4 rounded-e-none border-e-0" placeholder="Filter by title" value={value ? value : ""} onChange={e => setValue(e.target.value)} />
      {
        value && (
          <Button className="w-4 h-7 hover:bg-transparent absolute right-2 top-0" variant={"ghost"} size={"icon"} onClick={() => setValue(undefined)}>
            <IconClose className="w-4 h-4 text-secondary" />
          </Button>
        )
      }
    </div>
  )
}
