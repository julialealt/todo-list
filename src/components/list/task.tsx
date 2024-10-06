import { Trash, Check } from '@phosphor-icons/react'

import { TaskType } from '../../app'

import styles from './task.module.css'

interface Props {
  data: TaskType
  onDeleteTask: (task: TaskType) => void
  onToggleTask: ({ id, value }: { id: number; value: boolean }) => void
}

export function Task({ data, onDeleteTask, onToggleTask }: Props) {
  function handleTaskToggle() {
    onToggleTask({ id: data.id, value: !data.isChecked })
  }

  function handleDeleteTask() {
    onDeleteTask(data);
  }

  const checkboxCheckedClassname = data.isChecked
    ? styles['checkbox-checked']
    : styles['checkbox-unchecked']
  const paragraphCheckedClassname = data.isChecked
    ? styles['paragraph-checked']
    : ''

  return (
    <div className={styles.container}>
      <div>
        <label htmlFor="checkbox" onClick={handleTaskToggle}>
          <input readOnly type="checkbox" checked={data.isChecked} />
          <span className={`${styles.checkbox} ${checkboxCheckedClassname}`}>
            {data.isChecked && <Check size={12} />}
          </span>

          <p className={`${styles.paragraph} ${paragraphCheckedClassname}`}>
            {data.text}
          </p>
        </label>
      </div>

      <button onClick={handleDeleteTask}>
        <Trash size={20} />
      </button>
    </div>
  )
}