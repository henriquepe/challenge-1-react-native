import React, { useState } from 'react';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task if it's not empty
    if (newTaskTitle !== "") {

      const newTask = {
        id: new Date().getTime(),
        title: newTaskTitle,
        done: false
      }

      console.log(newTask.id);

      setTasks(oldState => [...oldState, newTask]);
    }
  }

  function handleMarkTaskAsDone(id: number) {
    //TODO - mark task as done if exists
    const taskToChangeStatus = tasks.find(task => task.id === id);

    const taskIndex = tasks.findIndex(task => task.id === id);

    if(!taskToChangeStatus){
      throw new Error('task does not exists')
    }

    taskToChangeStatus.done = !taskToChangeStatus.done;


   const newTasks = tasks.splice(taskIndex, 1, taskToChangeStatus);


    setTasks(newTasks);
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state

    const newTasks = tasks.filter(task => task.id !== id);

    setTasks(newTasks);
  }

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </>
  )
}