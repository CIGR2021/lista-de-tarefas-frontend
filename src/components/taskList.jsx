import React, { useContext } from 'react';
// Biblioteca Material UI
import { ListItemButton, Stack } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import IconButton from '@mui/material/IconButton/';
import DeleteIcon from '@mui/icons-material/Delete';
import { ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CircleIcon from '@mui/icons-material/Circle';
import { AddTask } from '@mui/icons-material';
// Context
import TaskContext from '../context/taskContext.jsx';

function TaskList() {
  const { tasks, removeTask, toggleComplete } = useContext(TaskContext);
  return (
    <main>
      {tasks.map((task, indice) => {
        return (
          <section key={task.task} className='card-task'>
            <ListItemIcon>
              <AddTask />
            </ListItemIcon>
            <ListItemButton
              component='a'
              onClick={() => toggleComplete(indice)}
              type='button'
            >
              <ListItemText
                primary={task.task}
                className={task.isComplete ? 'complete' : ''}
              />
            </ListItemButton>
            <div className='actions'>
              <Stack direction='row' spacing={1}>
                <IconButton
                  aria-label='delete'
                  variant='outlined'
                  color='error'
                  sx={{ mr: 1 }}
                  onClick={() => removeTask(indice)}
                >
                  <DeleteIcon />
                </IconButton>
              </Stack>
              <Button
                variant='contained'
                color='success'
                onClick={() => toggleComplete(indice)}
                type='button'
              >
                {task.isComplete ? <CheckCircleOutlineIcon /> : <CircleIcon />}
              </Button>
            </div>
          </section>
        );
      })}
    </main>
  );
}

export default TaskList;
