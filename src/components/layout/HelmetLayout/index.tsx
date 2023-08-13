import { FC } from 'react'
import { Helmet } from 'react-helmet'

import { HelmetLayoutProps } from './types'

import styles from './HelmetLayout.module.scss'

const HelmetLayout: FC<HelmetLayoutProps> = ({ children, title }) => (
  <div className={styles.wrapper}>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    {children}
  </div>
)

export default HelmetLayout
