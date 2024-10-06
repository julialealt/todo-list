import { useState, type ChangeEvent, type FormEvent, type InvalidEvent } from "react"
import { Button } from "./components/button"
import { Header } from "./components/header"
import { Input } from "./components/input"
import { TaskCount } from "./components/list/taskCount"
import { Task } from "./components/list/task"
import { Empty } from "./components/list/empty"

import styles from './app.module.css'
import './global.css'

export interface TaskType {
  id: number;
  text: string;
  isChecked: boolean;
}

export function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Estudar React JS',
      isChecked: false
    }
  ]);
  const [newTaskText, setNewTaskText] = useState('');

  const totalTasks = tasks.length;
  const checkedTasksCounter = tasks.reduce((prevValue, currentTask) => {
    if (currentTask.isChecked) {
      return prevValue + 1;
    }
    return prevValue
  }, 0);

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    
    if (!newTaskText) return;

    const newTask: TaskType = {
      id: new Date().getTime(),
      text: newTaskText,
      isChecked: false
    }

    setTasks((state) => [...state, newTask]);
    setNewTaskText('');
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setNewTaskText(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Preencha este campo!');
  }

  function handleDeleteTask(taskToDelete: TaskType) {
    const tasksWithoutDeletedOne = tasks.filter(task => task.id !== taskToDelete.id);
    setTasks(tasksWithoutDeletedOne);
  }

  function handleToggleTask({ id, value }: { id: number; value: boolean }) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isChecked: value }
      }
      return { ...task }
    })

    setTasks(updatedTasks)
  }

  const isNewTaskTextEmpty = newTaskText.length === 0;

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <form className={styles.addTaskForm}>
          <Input 
            onChange={handleNewTaskChange} 
            onInvalid={handleNewTaskInvalid} 
            value={newTaskText} 
            required
          />
          <Button 
            onClick={handleCreateNewTask}
            disable={isNewTaskTextEmpty}
          />
        </form>

        <div className={styles.taskList}>
          <header>
            <TaskCount totalCounter={totalTasks} checkedTasksCounter={checkedTasksCounter} />
          </header>

          <div>
            {tasks.length > 0 
              ? (
                <div>
                {tasks.map((task) => {
                  return (<Task 
                    key={task.id}
                    data={task}
                    onDeleteTask={handleDeleteTask}
                    onToggleTask={handleToggleTask}
                  />)
                })}
                </div>
              )
              : (
                <div>
                  <Empty />
                </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}
