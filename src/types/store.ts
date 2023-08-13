import { Action, ThunkAction } from '@reduxjs/toolkit'

import { store } from 'libraries/redux'

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>
