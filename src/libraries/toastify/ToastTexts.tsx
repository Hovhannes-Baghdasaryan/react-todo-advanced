import type { FC } from 'react'

import { Text } from 'components'

import type { TToastTextsProps } from './types'
import styles from './Toast.module.scss'

const ToastTexts: FC<TToastTextsProps> = ({ color, title, description }) => (
  <div className={styles.container}>
    <p style={{ color: color }} className={styles.container__title}>
      <Text text={title} />
    </p>
    {description && <span className={styles.container__description}>{description}</span>}
  </div>
)

export default ToastTexts
