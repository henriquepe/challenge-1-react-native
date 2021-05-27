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



      setTasks(oldState => [...oldState, newTask]);
    }
  }

  function handleMarkTaskAsDone(id: number) {
    //TODO - mark task as done if exists
    let newTasks: Task[] = [];

    for (let index = 0; index < tasks.length; index++) {
      const element = tasks[index];

      if(element.id === id) {
        element.done = !element.done
      }

      newTasks.push(element);
      
    }



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