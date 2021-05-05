import Button from '@material-ui/core/Button';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import Box from '@material-ui/core/Box';

const Header = () => (
  <header className='w-50'>
    <Box
      display='flex'
      flexDirection='row'
      justifyContent='space-between'
      alignItems='center'
    >
      <h1>Task Tracker</h1>
      <Button
        variant='contained'
        color='primary'
        size='small'
        startIcon={<LibraryAddIcon />}
        disableElevation
      >
        New Task
      </Button>
    </Box>
  </header>
);

export default Header;
