import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { Provider } from 'react-redux'
import { TailwindIndicator } from "./components/TailwindIndicator"
import ThemeToggle from "./components/ThemeToggle"
import './config/axios.config'
import { Home } from "./pages/home"
import store from "./redux/store"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5
    }
  }
})

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Home />
      </Provider>
      <ThemeToggle />
      <TailwindIndicator />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
