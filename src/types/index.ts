export type ToDo = {
  id: number
  title: string
  completed: boolean
  userId: number
}
export type ToDoList = {
  todos: ToDo[]
  total: number
  skip: number
  limit: number
  filter: Filter
}

export type ApiToDo = {
  id: number
  todo: string
  completed: boolean
  userId: number
}
export type ApiToDoList = {
  todos: ApiToDo[]
  total: number
  skip: string
  limit: number
}
export type Filter = {byTitle?: string, byCompleted: Filters}
export type Filters = 'All' | 'Available' | 'Unavailable'