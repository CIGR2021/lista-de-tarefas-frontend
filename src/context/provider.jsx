import React, { useState } from 'react';
import Context from './task';

function TaskProvider({ children }) {
  const [data, setData] = useState([]);

  return (
    <Context.Provider
      value={ data, setData }
    >
      {children}
    </Context.Provider>
  );
}

export default TaskProvider;