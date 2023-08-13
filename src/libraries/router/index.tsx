import { FC, Suspense, useMemo } from 'react'
import { Route, Routes } from 'react-router-dom'

import { useAuthentication } from 'hooks'
import { HelmetLayout, RouteLoader, PrivateRoute } from 'components'

import routesList from './routes'

export const RoutesWrapper: FC = () => {
  const { isAuthenticated } = useAuthentication()

  const renderRoutes = useMemo(
    () =>
      routesList.map(({ element: Element, path, title, isPrivate }) => (
        <Route
          key={path}
          path={path}
          element={
            <PrivateRoute isAuthenticated={isAuthenticated} isPrivate={isPrivate}>
              <Suspense fallback={<RouteLoader />}>
                <HelmetLayout title={title}>
                  <Element />
                </HelmetLayout>
              </Suspense>
            </PrivateRoute>
          }
        />
      )),
    [isAuthenticated]
  )

  return <Routes>{renderRoutes}</Routes>
}
