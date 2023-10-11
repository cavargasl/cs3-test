import Header from "@/components/Header";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import ToDoList from "./components/ToDoList";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex justify-center mt-8">
        <div className="flex flex-col gap-4 bg-primary text-primary-foreground rounded-lg p-8 w-[30rem]">
          <header className="flex justify-between">
            <Input type="text" className="rounded-e-none border-e-0 w-full h-10" placeholder="What do you need to do?" />
            <Button className="rounded-s-none h-10" variant={"secondary"} aria-label="add task">Add Task</Button>
          </header>
          <ToDoList />
        </div>
      </main>
    </>
  )
}
