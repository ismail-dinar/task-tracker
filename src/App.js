import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import {useState} from 'react';
import {SnackbarProvider} from 'notistack';
import Tasks from './components/tasks/Tasks';
import Header from './components/header/Header';
import './App.scss';
import NoTasks from './components/tasks/NoTasks';

const App = () => {
  const [tasks, setTasks] = useState([
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

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <SnackbarProvider>
      <Container maxWidth='lg'>
        <Box
          display='flex'
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
        >
          <Header />
          {tasks.length > 0 ? (
            <Tasks tasks={tasks} onDelete={deleteTask} />
          ) : (
            <NoTasks />
          )}
        </Box>
      </Container>
    </SnackbarProvider>
  );
};

export default App;
