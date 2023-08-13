import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import * as reducers from 'store'
import { AppDispatch, RootState } from 'types'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const store = configureStore({
  reducer: {
    ...reducers,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      //@TODO: need to check if this way of solution is correct
      serializableCheck: false,
    }),
})
