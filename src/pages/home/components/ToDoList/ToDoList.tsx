import { IconDelete, IconEdit } from "@/components/Icons"
import { Button } from "@/components/ui/Button"

const MockToDoList = [
  { id: 1, title: 'Task 1' },
  { id: 2, title: 'Prepare a dish from a foreign culture Task 2 with more text for rebase' },
  { id: 3, title: 'Prepare a dish from a foreign culture' },
]

export default function ToDoList() {
  return (
    <ul className="flex flex-col gap-2" data-testid="to-do-list">
      {MockToDoList.map((task) => (
        <li
          className="bg-secondary text-secondary-foreground rounded-md p-2 pr-0 flex gap-2 justify-between items-center"
          key={task.id}
        >
          <div className="truncate" title={task.title}>{task.title}</div>
          <div className="flex">
            <Button variant={"ghost"} className="hover:bg-transparent text-secondary-foreground" size={"icon"} aria-label="edit task">
              <IconEdit className='h-5 w-5' />
            </Button>
            <Button variant={"ghost"} className="hover:bg-transparent text-secondary-foreground" size={"icon"} aria-label="delete task">
              <IconDelete className='h-5 w-5' />
            </Button>
          </div>
        </li>
      ))}
    </ul>
  )
}
