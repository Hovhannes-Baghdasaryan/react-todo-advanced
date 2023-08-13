import type { FC } from 'react'

export type TRoutePageType = {
  path: string
  element: FC
  title: string
  isPrivate?: boolean
}

export enum ERoutePaths {
  Home = '/',
}
