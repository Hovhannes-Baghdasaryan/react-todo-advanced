import { ReactElement } from 'react'

export type TPrivateRoute = {
  children: ReactElement
  isAuthenticated: boolean
  isPrivate?: boolean
}
