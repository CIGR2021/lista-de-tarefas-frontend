import React from 'react';
// Código extraído da lib Material UI - Com algumas adequações feitas
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import Task from '../components/Task.jsx';

function Home() {
  return (
    <Box>
      <Container
        sx={{
          mt: 5,
          borderRadius: 5,
          bgcolor: 'background.default',
          color: 'text.primary',
          opacity: 0.9,
          boxShadow: 2,
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 2fr)',
            gap: 1,
            gridTemplateRows: 'auto',
            gridTemplateAreas: `"header header header header"
            "main main main main"
            "footer footer footer footer"`,
          }}
        >
          <Box
            sx={{
              gridArea: 'header',
              textAlign: 'center',
              gap: 1,
            }}
          >
            <h1>Lista de Tarefas a fazer</h1>
          </Box>
          <Box
            sx={{
              gridArea: 'main',
              borderColor: 'red',
              boxShadow: 6,
              gap: 4,
              borderRadius: 5,
            }}
          >
            <Task />
          </Box>
          <Box
            sx={{
              gridArea: 'footer',
              mb: 1,
            }}
          >
            <h4>Desafio proposto pela Trybe | Desenvolvivo por Carlos</h4>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Home;
