import React, { useContext, useState } from 'react';
// Biblioteca Material UI
import { InputAdornment, Stack, TextField } from '@material-ui/core';
import IconButton from '@material-ui/core/Button';
import { AddTask } from '@mui/icons-material';
// Component
import TaskList from './taskList.jsx';
// Context
import TaskContext from '../context/taskContext.jsx';

function Task() {
  const { addTask } = useContext(TaskContext);
  const [field, setField] = useState('');

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <h1>Tarefas</h1>
      <section className='task'>
        <Stack direction='row' spacing={1}>
          <TextField
            value={field || ''}
            className='task-field'
            onChange={(event) => {
              setField(event.currentTarget.value);
            }}
            id='input-with-icon-textfield'
            label='Digite sua tarefa'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <AddTask />
                </InputAdornment>
              ),
            }}
            variant='standard'
          />
          <IconButton
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
        </Stack>
      </section>
      <TaskList />
    </form>
  );
}

export default Task;
