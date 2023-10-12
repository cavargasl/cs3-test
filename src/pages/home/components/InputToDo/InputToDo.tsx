import { IconLoader } from '@/components/Icons'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { InputTodo } from '../NewToDo/NewToDo'

type InputToDoProps = {
  onSubmit: () => void;
  register: UseFormRegister<InputTodo>;
  errors: FieldErrors<InputTodo>;
  isLoading: boolean;
  error: unknown;
  update?: boolean;
}
export default function InputToDo({ onSubmit, register, errors, isLoading, error, update }: InputToDoProps) {
  return (
    <div className='flex flex-col'>
      <form onSubmit={onSubmit} className="flex justify-between" data-testid="new-todo">
        <Input {...register("title")} type="text" className="rounded-e-none border-e-0 w-full h-10 border-primary-foreground placeholder:text-muted" placeholder={update ? "What do you need edit?" : "What do you need to do?"} />
        <Button type='submit' className="rounded-s-none h-10 w-24" variant={"secondary"} aria-label="add task">
          {isLoading ? (
            <IconLoader
              className="h-4 w-4 animate-spin"
              aria-hidden="true"
            />
          ) :
            update ? "Update Task" : "Add Task"
          }
        </Button>
      </form>
      {errors.title && <p className='text-red-400'>{errors.title.message}</p>}
      {error instanceof Error && <p className='text-red-400'>Ops... something went wrong</p>}
    </div>
  )
}
