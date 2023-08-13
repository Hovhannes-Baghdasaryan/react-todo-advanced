import type { FC } from 'react'
import classNames from 'classnames'

import { E_Button } from 'types'

import { T_Button } from './types'
import styles from './Button.module.scss'

const Button: FC<T_Button> = ({ className = '', onClick, variant = E_Button.Primary, type = 'button', children }) => (
  <button
    type={type}
    onClick={onClick}
    className={classNames(styles[variant], {
      [className]: !!className,
    })}
  >
    {children}
  </button>
)

export default Button
