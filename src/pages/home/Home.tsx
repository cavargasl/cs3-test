import { Header } from "@/components/Header";
import { NewToDo } from "./components/NewToDo";
import { ToDoList } from "./components/ToDoList";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex justify-center mt-8">
        <div className="flex flex-col gap-4 bg-primary text-primary-foreground rounded-lg p-8 w-[30rem]">
          <NewToDo />
          <ToDoList />
        </div>
      </main>
    </>
  )
}
