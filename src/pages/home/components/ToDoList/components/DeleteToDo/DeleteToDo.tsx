import { IconDelete, IconLoader } from "@/components/Icons";
import { Button } from "@/components/ui/Button";
import { DialogHeader } from "@/components/ui/Dialog";
import { ToDo, ToDoList } from "@/types";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/Dialog";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { deleteTodo } from "./services";

type DeleteToDoProps = {
  todo: ToDo
}
export default function DeleteToDo({ todo }: DeleteToDoProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const queryClient = useQueryClient()

  const { isLoading, mutate } = useMutation({
    mutationFn: deleteTodo,
  })

  function onSubmit() {
    mutate({ id: todo.id }, {
      onSuccess: (response) => {
        queryClient.setQueryData(['todos'], (old?: Omit<ToDoList, "filter">) => {
          if (!old) return
          return { todos: old?.todos.filter(task => task.id !== response.id) || [], limit: old?.limit || 5, total: old?.total ? old.total - 1 : 0, skip: old?.skip || 0 }
        })
        setIsDialogOpen(false)
      }
    })
  }
  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button variant={"ghost"} className="hover:bg-transparent text-secondary-foreground" size={"icon"} aria-label="delete task">
          <IconDelete className='h-5 w-5' />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Are you sure you want to delete this task?
          </DialogTitle>
        </DialogHeader>
        <div className="flex gap-4">
          <Button
            variant={"danger"}
            className="w-full"
            onClick={onSubmit}
            disabled={isLoading}
          >
            {isLoading ? (
              <IconLoader
                className="h-4 w-4 animate-spin"
                aria-hidden="true"
              />
            ) : "Delete"
            }
          </Button>
          <Button
            variant={"ghost"}
            className="w-full"
            onClick={() => setIsDialogOpen(false)}
            disabled={isLoading}
          >
            Cancel
          </Button>
        </div>
      </DialogContent>
    </Dialog>

  )
}
