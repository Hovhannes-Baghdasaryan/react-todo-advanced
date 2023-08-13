export type T_Todo = {
  id: string
  name: string
  date: string
}

export type T_DisplayTodo = {
  id: string
  date: string
  count: number
}

export type T_TodoInitialState = {
  todos: T_Todo[]
  displayTodos: T_DisplayTodo[]
}
