import { IconClose } from '@/components/Icons'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { useDebounce } from '@/hooks/useDebonce'
import { filterTodos } from '@/redux/slice/todos'
import { Dispatch } from '@reduxjs/toolkit'
import { useEffect, useState } from 'react'

type FilteringProps = {
  dispatch: Dispatch
}
export default function FilteringByTitle({ dispatch }: FilteringProps) {
  const [value, setValue] = useState<string>()
  const debouncedValue = useDebounce(value, 500);

  useEffect(() => {
    if (debouncedValue) {
      dispatch(filterTodos({ byTitle: debouncedValue }))
    }
    if (!debouncedValue) {
      dispatch(filterTodos({ byTitle: undefined }))
    }
  }, [debouncedValue, dispatch])

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
