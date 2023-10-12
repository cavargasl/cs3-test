type ToDo = {
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
}

type ApiToDo = {
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