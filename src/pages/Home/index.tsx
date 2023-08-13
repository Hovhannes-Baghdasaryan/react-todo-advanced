import type { FC } from 'react'

import { AddTodo, DateList } from 'components'
import { TodoSelector } from 'store/todo/selectors'

import styles from './Home.module.scss'
import { useAppSelector } from 'libraries/redux'

const HomeContainer: FC = () => {
  const getTodosDisplay = useAppSelector(TodoSelector.getTodosDisplay)

  return (
    <section className={styles.wrapper}>
      <header className={styles.wrapper__header}>
        <h2 className={styles.wrapper__header__title}>To do list</h2>
        <AddTodo />
      </header>
      <DateList getTodosDisplay={getTodosDisplay} />
    </section>
  )
}

export default HomeContainer
