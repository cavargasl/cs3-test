import { Header } from "@/components/Header";
import { NewToDo } from "./components/NewToDo";
import { ToDoList } from "./components/ToDoList";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center gap-8 mt-8">
        <div className="flex flex-col gap-4 bg-primary text-primary-foreground rounded-lg p-8 w-[30rem]">
          <NewToDo />
          <ToDoList />
        </div>
        <div className="bg-orange-500/60 text-foreground rounded-lg w-[30rem] p-4 text-center">
          <p className="font-medium text-lg">Warning</p>
          <p className="font-normal">The new tasks is not save in the backend, any action in those will fail</p>
        </div>
      </main>
    </>
  )
}
