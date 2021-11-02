import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TaskContext from './taskContext.jsx';

function TaskProvider({ children }) {
  const [tasks, setTask] = useState([]);

  const addTask = (task) => {
    const newTask = {
      task,
      isComplete: false,
    };
    setTask([...tasks, newTask]);
  };

  const removeTask = (indice) => {
    const newTasks = [...tasks];
    newTasks.splice(indice, 1);
    setTask(newTasks);
  };

  const toggleComplete = (indice) => {
    const newTasks = [...tasks];
    newTasks[indice].isComplete = !newTasks[indice].isComplete;
    setTask(newTasks);
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, removeTask, toggleComplete }}
    >
      {children}
    </TaskContext.Provider>
  );
}

TaskProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default TaskProvider;
