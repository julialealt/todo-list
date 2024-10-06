import clipboardIcon from '../../assets/Clipboard.svg'

import styles from './empty.module.css'

export function Empty() {
  return (
    <div className={styles.container}>
      <img src={clipboardIcon} />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  )
}