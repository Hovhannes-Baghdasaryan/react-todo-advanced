import { FC } from 'react'

import { RoutesWrapper } from 'libraries/router'

import styles from './PageLayout.module.scss'

const PageLayout: FC = () => (
  <main className={styles.wrapper}>
    <div className={styles.wrapper__inner}>
      <RoutesWrapper />
    </div>
  </main>
)

export default PageLayout
