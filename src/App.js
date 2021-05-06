import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import {useState} from 'react';
import Tasks from './components/tasks/Tasks';
import Header from './components/header/Header';

import './App.scss';

const App = () => {
  const [tasks] = useState([
    {
      id: 1,
      text: 'Task 1',
      createdAt: new Date(),
      dueDate: new Date(),
    },
    {
      id: 2,
      text: 'Task 2',
      createdAt: new Date(),
      dueDate: new Date(),
    },
    {
      id: 3,
      text: 'Task 3',
      createdAt: new Date(),
      dueDate: new Date(),
    },
    {
      id: 4,
      text: 'Task 4',
      createdAt: new Date(),
      dueDate: new Date(),
    }
  ]);

  return (
    <Container maxWidth='lg'>
      <Box display='flex' flexDirection='row' justifyContent='center'>
        <Header />
      </Box>
      <Tasks className='w-50' tasks={tasks} />
    </Container>
  );
};

export default App;
