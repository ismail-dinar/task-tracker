import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Header from './components/header/Header';
import './App.scss';

function App() {
  return (
    <Container maxWidth='lg'>
      <Box display='flex' flexDirection='row' justifyContent='center'>
        <Header />
      </Box>
    </Container>
  );
}

export default App;
