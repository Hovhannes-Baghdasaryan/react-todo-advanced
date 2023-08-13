import { useState, type FC } from 'react'

import { Button } from 'components'

import { addTodo } from 'store/todo'
import { T_Todo } from 'store/todo/types'
import { useAppDispatch } from 'libraries/redux'

import styles from './AddTodo.module.scss'

const AddTodo: FC = () => {
  const [formTodo, setFormTodo] = useState<Omit<T_Todo, 'id'>>({ name: '', date: '' })

  const dispatch = useAppDispatch()

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    dispatch(addTodo(formTodo))
  }

  const handleTodoNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormTodo(prev => ({ ...prev, [event.target.name]: event.target.value }))
  }

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.wrapper__title}>New Task</h2>
      <form onSubmit={onSubmit} className={styles.wrapper__form}>
        <input required autoComplete="off"  name='name' placeholder='Add Todo Title' onChange={handleTodoNameChange} value={formTodo.name}  />
        <input name='date' onChange={handleTodoNameChange} value={formTodo.date} type='date' />
        <Button type='submit'>ADD</Button>
      </form>
    </div>
  )
}

export default AddTodo
