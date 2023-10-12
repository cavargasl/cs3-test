import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { TailwindIndicator } from "./components/TailwindIndicator"
import ThemeToggle from "./components/ThemeToggle"
import { Home } from "./pages/home"
import './config/axios.config'

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Home />
      <ThemeToggle />
      <TailwindIndicator />
    </QueryClientProvider>
  )
}

export default App
