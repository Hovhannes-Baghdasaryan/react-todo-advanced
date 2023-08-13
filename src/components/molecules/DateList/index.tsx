import type { FC } from 'react'

import { ChevronIcon } from 'assets'

import styles from './DateList.module.scss'
import { T_DateListProps } from './types'

const DateList: FC<T_DateListProps> = ({ getTodosDisplay }) => (
  <div className={styles.wrapper}>
    <h2 className={styles.wrapper__title}>Dates</h2>
    <ul className={styles.wrapper__list}>
      {getTodosDisplay.map(element => (
        <li key={element.id} className={styles.wrapper__list__item} itemType='button'>
          <span className={styles.wrapper__list__item__date}>
            {element.date} ({element.count})
          </span>
          <ChevronIcon className={styles.wrapper__list__item__icon} />
        </li>
      ))}
    </ul>
  </div>
)

export default DateList
