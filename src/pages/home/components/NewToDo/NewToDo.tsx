import { IconLoader } from '@/components/Icons'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { ToDoList } from '@/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { newTodoService } from './services'

const CheckNewTodo = z.object({
  title: z.string().trim().min(2, {
    message: "Title is too short",
  }).max(50, {
    message: "Title is too long",
  })
})
export type Input = z.infer<typeof CheckNewTodo>

export default function NewToDo() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<Input>({
    resolver: zodResolver(CheckNewTodo),
    defaultValues: {
      title: "",
    },
  })
  const { error, isLoading, mutate } = useMutation({
    mutationFn: newTodoService,
  })

  const queryClient = useQueryClient()
  function onSubmit(data: Input) {
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
    <div className='flex flex-col'>
      <form onSubmit={handleSubmit(onSubmit)} className="flex justify-between" data-testid="new-todo">
        <Input {...register("title")} type="text" className="rounded-e-none border-e-0 w-full h-10 border-primary-foreground placeholder:text-muted" placeholder="What do you need to do?" />
        <Button type='submit' className="rounded-s-none h-10 w-24" variant={"secondary"} aria-label="add task">
          {isLoading ? (
            <IconLoader
              className="h-4 w-4 animate-spin"
              aria-hidden="true"
            />
          ) :
            "Add Task"
          }
        </Button>
      </form>
      {errors.title && <p className='text-red-400'>{errors.title.message}</p>}
      {error instanceof Error && <p className='text-red-400'>Ops... something went wrong</p>}
    </div>
  )
}
