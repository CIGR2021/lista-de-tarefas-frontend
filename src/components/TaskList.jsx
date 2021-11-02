import React, { useContext, useState } from 'react';
// Biblioteca Material UI
import { ListItemButton, Stack, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import IconButton from '@mui/material/IconButton/';
import DeleteIcon from '@mui/icons-material/Delete';
import { ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CircleIcon from '@mui/icons-material/Circle';
import Pending from '@mui/icons-material/Pending';
import { AddTask } from '@mui/icons-material';
import ListAltIcon from '@mui/icons-material/ListAlt';
import UpdateIcon from '@mui/icons-material/Update';
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import SortIcon from '@mui/icons-material/Sort';
// Context
import TaskContext from '../context/TaskContext.jsx';

function TaskList() {
  const {
    tasks,
    removeTask,
    toggleComplete,
    taskEditing,
    setTaskEditing,
    editingText,
    setEditingText,
    editTask,
    handleOrder,
    togglePendente,
  } = useContext(TaskContext);

  const [edited, setEdited] = useState(false);

  return (
    <main>
      <section className='card-task'>
        <ListItemButton
          component='a'
          onClick={() => handleOrder('description')}
        >
          <SortByAlphaIcon />
          <ListItemText title='Clique Para Ordenar' primary='Descrição' />
        </ListItemButton>
        <ListItemButton component='a' onClick={() => handleOrder('completed')}>
          <SortIcon />
          <ListItemText title='Clique Para Ordenar' primary='Status' />
        </ListItemButton>
        <ListItemText primary='Botões de Ação' />
      </section>
      {tasks.map((task) => {
        return (
          <section key={task.id} className='card-task'>
            <ListItemIcon>
              <AddTask />
            </ListItemIcon>
            <ListItemText
              primary={
                taskEditing === task.id ? (
                  <TextField
                    autoFocus
                    type='text'
                    label='Digite a nova tarefa'
                    value={editingText}
                    onChange={(event) =>
                      setEditingText(event.currentTarget.value)
                    }
                  />
                ) : (
                  task.description
                )
              }
            />
            {task.completed ? (
              <ListItemText label='Status da Tarefa' primary='Completa' />
            ) : (
              <ListItemText label='Status da Tarefa' primary='Em Andamento' />
            )}
            {task.pendente ? null : (
              <ListItemText label='Status da Tarefa' primary='Pendente' />
            )}
            <div className='actions'>
              <Stack direction='row' spacing={1}>
                <IconButton
                  title='Excluir Tarefa'
                  aria-label='delete'
                  variant='outlined'
                  color='error'
                  sx={{ mr: 1 }}
                  onClick={() => removeTask(task.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </Stack>
              <Button onClick={() => toggleComplete(task.id)} type='button'>
                {task.completed ? <CheckCircleOutlineIcon /> : <CircleIcon />}
              </Button>
              <Button onClick={() => togglePendente(task.id)} type='button'>
                {task.pendente ? <CircleIcon /> : <Pending />}
              </Button>
              {edited === false ? (
                <Button
                  type='button'
                  onClick={() => {
                    setTaskEditing(task.id);
                    setEdited(true);
                  }}
                >
                  <ListAltIcon />
                </Button>
              ) : (
                <Button
                  type='submit'
                  onClick={() => {
                    editTask(task.id);
                    setEdited(false);
                  }}
                >
                  <UpdateIcon />
                </Button>
              )}
            </div>
          </section>
        );
      })}
    </main>
  );
}

export default TaskList;
