import React, { useContext } from 'react';
// Biblioteca Material UI
import { InputAdornment, Stack, TextField } from '@material-ui/core';
import IconButton from '@material-ui/core/Button';
import { AddTask } from '@mui/icons-material';
// Component
import TaskList from './TaskList.jsx';
// Context
import TaskContext from '../context/TaskContext.jsx';

function Task() {
  const { tasks, addTask, handleSubmit, field, setField } =
    useContext(TaskContext);

  return (
    <form onSubmit={handleSubmit}>
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
            label='Clique aqui e digite sua tarefa'
            maxLength='130'
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
      {tasks ? <TaskList /> : []}
    </form>
  );
}

export default Task;
