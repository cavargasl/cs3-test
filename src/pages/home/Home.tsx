import Header from "../../components/Header";


export default function Home() {
  return (
    <>
      <Header />
      <main className="flex justify-center mt-8">
        <div className="max-w-3xl bg-primary text-primary-foreground rounded-lg p-8">
          Table list
        </div>
      </main>
    </>
  )
}
