import { RootState } from 'types'

const getTodos = (state: RootState) => state.todo.todos
const getTodosDisplay = (state: RootState) => state.todo.displayTodos

export const TodoSelector = {
  getTodos,
  getTodosDisplay,
}
