import { PlusCircle } from '@phosphor-icons/react'

import styles from './button.module.css'

export function Button({ ...props }) {
  return (
    <button type='submit' className={styles.button} {...props}>
      Criar 
      <PlusCircle size={20} />
    </button>
  )
}