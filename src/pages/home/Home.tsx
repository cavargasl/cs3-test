import Header from "@/components/Header";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex justify-center mt-8">
        <div className="bg-primary text-primary-foreground rounded-lg p-8 min-w-[30rem]">
          <header className="flex justify-between">
            <Input type="text" className="rounded-e-none border-e-0 w-full" />
            <Button className="rounded-s-none" variant={"secondary"} >Add Task</Button>
          </header>
        </div>
      </main>
    </>
  )
}
