import { E_Button } from 'types'

export type T_Button = {
  variant?: E_Button
  onClick?: () => void
  type?: 'button' | 'reset' | 'submit'
  className?: string
  children: string
}
