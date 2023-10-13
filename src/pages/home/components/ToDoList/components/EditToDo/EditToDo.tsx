import { IconEdit } from "@/components/Icons";
import { Button } from "@/components/ui/Button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/Dialog";
import { CheckNewTodo } from "@/lib/validations/todo";
import { ToDo, ToDoList } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { InputToDo } from "../../../InputToDo";
import { InputTodo } from "../../../NewToDo/NewToDo";
import { editTodo } from "./services";

type EditToDoProps = {
  todo: ToDo;
}
export default function EditToDo({ todo }: EditToDoProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const queryClient = useQueryClient()
  const { register, handleSubmit, formState: { errors }, resetField } = useForm<InputTodo>({
    resolver: zodResolver(CheckNewTodo),
    defaultValues: {
      title: todo.title,
    },
  })
  const { error, isLoading, mutate } = useMutation({
    mutationFn: editTodo,
  })

  function onSubmit(data: InputTodo) {
    mutate({ id: todo.id, data: { title: data.title, completed: todo.completed } }, {
      onSuccess: (response) => {
        queryClient.setQueryData(['todos'], (old?: ToDoList) => {
          if (!old) return
          return {
            ...old, todos: old?.todos.map((task) => {
              if (task.id === todo.id) {
                return { ...response, title: data.title }
              }
              return task
            }
            ) || []
          }
        })
        resetField("title", { defaultValue: data.title })
        setIsDialogOpen(false)
      }
    })
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button variant={"ghost"} className="hover:bg-transparent text-secondary-foreground" size={"icon"} aria-label="edit task">
          <IconEdit className='h-5 w-5' />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Edit ToDo
          </DialogTitle>
        </DialogHeader>
        <InputToDo register={register} onSubmit={handleSubmit(onSubmit)} error={error} isLoading={isLoading} errors={errors} update />
      </DialogContent>
    </Dialog>
  )
}
