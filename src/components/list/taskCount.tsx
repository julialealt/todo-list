import styles from './taskCount.module.css'

interface TaskCountProps {
  totalCounter: number;
  checkedTasksCounter: number;
}

export function TaskCount({ totalCounter, checkedTasksCounter }: TaskCountProps) {
  return (
    <>
      <div className={styles.wrapCreated}>
        <p className={styles.titleCreated}>Tarefas criadas</p>
        <p className={styles.countTotal}>{totalCounter}</p>
      </div>

      <div className={styles.wrapConcluded}>
        <p className={styles.titleConcluded}>Concluídas</p>
        <p className={styles.counter}>{checkedTasksCounter} de {totalCounter}</p>
      </div>
    </>
  )
}