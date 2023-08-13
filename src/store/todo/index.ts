import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { T_Todo, T_TodoInitialState } from './types'
import { uniqueId } from 'lodash'

export const initialState: T_TodoInitialState = {
  todos: [],
  displayTodos: [],
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, { payload }: PayloadAction<Omit<T_Todo, 'id'>>) => {
      state.todos.push({ id: uniqueId(), ...payload })

      for (let index = 0; index < state.displayTodos.length; index++) {
        if (state.displayTodos[index].date === payload.date) {
          state.displayTodos[index].count++

          return
        }
      }

      state.displayTodos.push({
        id: uniqueId(),
        date: payload.date,
        count: 1,
      })
    },
  },
})

export const { addTodo } = todoSlice.actions

const todoReducer = todoSlice.reducer

export default todoReducer
