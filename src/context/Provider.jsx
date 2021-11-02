import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SnackbarContent from '@mui/material/SnackbarContent';
// ContextAPI
import TaskContext from './TaskContext.jsx';

function TaskProvider({ children }) {
  const [tasks, setTask] = useState();
  const [taskEditing, setTaskEditing] = useState(null);
  const [editingText, setEditingText] = useState('');
  const [field, setField] = useState('');
  const [fieldPriority, setFieldPriority] = useState('');
  const [order, setOrder] = useState(1);
  const [colOrder, setColOrder] = useState('description');

  const saveTask = (tasksToSave) => {
    localStorage.setItem('tasks', JSON.stringify(tasksToSave));
  };

  const loadTasks = () => {
    const loadedTasks = JSON.parse(localStorage.getItem('tasks'));

    return loadedTasks;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleOrder = (fieldName) => {
    setOrder(-order);
    setColOrder(fieldName);

    const orderTasks = tasks.sort((a, b) =>
      a[colOrder] < b[colOrder] ? -order : order,
    );

    setTask(orderTasks);
  };

  const addTask = (task) => {
    const Dia = new Date().getDay();
    const Mês = new Date().getMonth();
    const Ano = new Date().getFullYear();
    const Hora = new Date().getHours();
    const Minutos = new Date().getMinutes();
    const Segundos = new Date().getSeconds();

    if (field.trim() === '') {
      const message =
        'Não foi possível adicionar a tarefa. Tente não deixar campos em branco!';
      <SnackbarContent message={message} />;
    } else {
      const newTask = {
        id: new Date().getTime(),
        description: task,
        priority: task.priority,
        time: `${Dia}/${Mês}/${Ano}`,
        hora: `${Hora}:${Minutos}:${Segundos}`,
        completed: false,
      };

      const newTasks = [...(tasks || []), newTask];

      setTask(newTasks);
    }
  };

  const removeTask = (id) => {
    const newTasks = [...tasks].filter((task) => task.id !== id);

    setTask(newTasks);
  };

  const toggleComplete = (id) => {
    const updateTasks = [...tasks].map((task) => {
      // eslint-disable-next-line no-param-reassign
      if (task.id === id) task.completed = !task.completed;

      return task;
    });

    setTask(updateTasks);
  };

  const togglePendente = (id) => {
    const updateTasks = [...tasks].map((task) => {
      // eslint-disable-next-line no-param-reassign
      if (task.id === id) task.pendente = !task.pendente;

      return task;
    });

    setTask(updateTasks);
  };

  const editTask = (id) => {
    const updateTasks = [...tasks].map((task) => {
      if (task.id === id) {
        if (!editingText) {
          return task;
        }
        // eslint-disable-next-line no-param-reassign
        task.description = editingText;
      }

      return task;
    });

    setTask(updateTasks);
    setTaskEditing(null);
    setEditingText('');
  };

  useEffect(() => {
    const loadedTasks = loadTasks();

    setTask(loadedTasks);
  }, []);

  useEffect(() => {
    if (tasks) {
      saveTask(tasks);
    }
  }, [tasks]);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        toggleComplete,
        togglePendente,
        handleSubmit,
        taskEditing,
        setTaskEditing,
        editingText,
        setEditingText,
        editTask,
        field,
        setField,
        fieldPriority,
        setFieldPriority,
        handleOrder,
      }}
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
