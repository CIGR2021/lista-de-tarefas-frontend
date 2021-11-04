import React, { useContext } from 'react';
// Biblioteca Material UI
import { Box, TextField } from '@mui/material';
import { AddTask } from '@mui/icons-material';
import IconButton from '@material-ui/core/Button';
// Component
import TaskList from './TaskList.jsx';
// Context
import TaskContext from '../context/TaskContext.jsx';

function Task() {
  const { tasks, addTask, handleSubmit, field, setField } =
    useContext(TaskContext);

  return (
    <form onSubmit={handleSubmit}>
      <section className='task'>
        <Box direction='row' spacing={1}>
          <AddTask sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField
            id='input-with-sx'
            label='Clique e digite sua tarefa'
            value={field || ''}
            variant='standard'
            className='task-field'
            maxLength='130'
            onChange={(event) => {
              setField(event.currentTarget.value);
            }}
          />
          <IconButton
            title='Adicione uma tarefa'
            variant='contained'
            color='primary'
            className='button-add-task'
            type='submit'
            onClick={() => {
              setField('');
              addTask(field);
            }}
          >
            <AddTask />
          </IconButton>
        </Box>
      </section>
      {tasks ? <TaskList /> : []}
    </form>
  );
}

export default Task;
