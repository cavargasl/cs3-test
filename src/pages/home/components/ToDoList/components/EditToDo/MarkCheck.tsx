import { Checkbox } from '@/components/ui/CheckBox'
import { ToDo, ToDoList } from '@/types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { editTodo } from './services'

type MarkCheckProps = {
  todo: ToDo
}

export default function MarkCheck({ todo }: MarkCheckProps) {
  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationFn: editTodo,
  })

  function onSubmit() {
    mutate({id: todo.id, data: {completed: !todo.completed}}, {
      onSuccess: () => {
        queryClient.setQueryData(['todos'], (old?: ToDoList) => {
          if (!old) return
          return {
            ...old, todos: old?.todos.map((task) => {
              if (task.id === todo.id) {
                return { ...todo, completed: !todo.completed }
              }
              return task
            }
            ) || []
          }
        })
      }
    })
  }

  return (
    <Checkbox checked={todo.completed} onClick={onSubmit} />
  )
}
