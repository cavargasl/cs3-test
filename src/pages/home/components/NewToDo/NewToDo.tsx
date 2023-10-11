import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

export default function NewToDo() {
  return (
    <header className="flex justify-between" data-testid="new-todo">
      <Input type="text" className="rounded-e-none border-e-0 w-full h-10" placeholder="What do you need to do?" />
      <Button className="rounded-s-none h-10" variant={"secondary"} aria-label="add task">Add Task</Button>
    </header>
  )
}
