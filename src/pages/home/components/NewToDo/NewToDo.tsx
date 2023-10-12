import { ToDoList } from '@/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { InputToDo } from '../InputToDo'
import { newTodoService } from './services'
import { CheckNewTodo } from '@/lib/validations/todo'

export type InputTodo = z.infer<typeof CheckNewTodo>

export default function NewToDo() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<InputTodo>({
    resolver: zodResolver(CheckNewTodo),
    defaultValues: {
      title: "",
    },
  })
  const { error, isLoading, mutate } = useMutation({
    mutationFn: newTodoService,
  })

  const queryClient = useQueryClient()
  function onSubmit(data: InputTodo) {
    mutate({ completed: false, userId: 5, todo: data.title }, {
      onSuccess: (response) => {
        reset()
        queryClient.setQueryData(['todos'], (old?: ToDoList) => {
          return { todos: [response, ...old?.todos.slice(0, 4) || []], limit: old?.limit || 5, total: old?.total ? old.total + 1 : 0, skip: old?.skip || 0 }
        })
      }
    })
  }

  return (
    <InputToDo error={error} errors={errors} isLoading={isLoading} onSubmit={handleSubmit(onSubmit)} register={register} />
  )
}
