import { FC } from 'react'

import { Navigate } from 'react-router-dom'

import { TPrivateRoute } from './types'

const PrivateRoute: FC<TPrivateRoute> = ({ children, isAuthenticated, isPrivate = false }) => {
  if (isPrivate && !isAuthenticated) {
    return <Navigate to='/' />
  }

  return children
}

export default PrivateRoute
