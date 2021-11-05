import React, { useContext, useState } from 'react';
// Biblioteca Material UI
import { ListItemButton, Stack, TextField } from '@material-ui/core';
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
// import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
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
  // const [status, setStatus] = useState('');

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
        <ListItemButton component='a' onClick={() => handleOrder('time')}>
          <AccessTimeIcon />
          <ListItemText title='Clique Para Ordenar' primary='Data de Criação' />
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
                    id={task.id}
                    autoFocus
                    type='text'
                    label='Digite a nova tarefa'
                    value={editingText}
                    onChange={(event) =>
                      setEditingText(event.currentTarget.value)
                    }
                  />
                ) : (
                  <ListItemText
                    title={`Descrição da Tarefa: ${task.description},
Data de Criação: ${task.dateOfCreated},
Id: ${task.id}`}
                    primary={task.description}
                  />
                )
              }
            />
            <ListItemText
              title='Data de Criação'
              primary={task.dateOfCreated}
            />
            {/* <ListItemText id={task.id} primary={status} /> */}
            {task.completed ? (
              <ListItemText title='Status da Tarefa' primary='Completa' />
            ) : (
              <ListItemText title='Status da Tarefa' primary='Em Andamento' />
            )}
            {task.pendente ? null : (
              <ListItemText title='Status da Tarefa' primary='Pendente' />
            )}
            <div className='actions'>
              <Stack direction='row' spacing={1}>
                <IconButton
                  title='Excluir Tarefa'
                  aria-label='delete'
                  variant='outlined'
                  color='error'
                  sx={{ ml: 1 }}
                  onClick={() => removeTask(task.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </Stack>
              <IconButton
                id={task.id}
                title={
                  task.completed
                    ? 'Marque como Em andamento'
                    : 'Marque como Completa'
                }
                onClick={() => {
                  toggleComplete(task.id);
                  // setStatus(task.completed ? 'Concluída' : 'Em Andamento');
                }}
                type='button'
              >
                {task.completed ? <CheckCircleOutlineIcon /> : <CircleIcon />}
              </IconButton>
              <IconButton
                id={task.id}
                title={task.pendente ? 'Marque como pendente' : 'Desmarque'}
                onClick={() => {
                  togglePendente(task.id);
                  // setStatus(task.pendente ? 'Pendente' : 'Em Andamento');
                }}
                type='button'
              >
                {task.pendente ? <CircleIcon /> : <Pending />}
              </IconButton>
              {edited === false ? (
                <IconButton
                  id={task.id}
                  type='button'
                  onClick={() => {
                    setTaskEditing(task.id);
                    setEdited(true);
                  }}
                >
                  <ListAltIcon />
                </IconButton>
              ) : (
                <IconButton
                  id={task.id}
                  type='submit'
                  onClick={() => {
                    editTask(task.id);
                    setEdited(false);
                  }}
                >
                  <UpdateIcon />
                </IconButton>
              )}
            </div>
          </section>
        );
      })}
    </main>
  );
}

export default TaskList;
