export enum EToastVersions {
  info = 'info',
  error = 'error',
  success = 'success',
  warning = 'warning',
}

export type TToastTextsProps = {
  color: string
  title: string
  description?: string
}
