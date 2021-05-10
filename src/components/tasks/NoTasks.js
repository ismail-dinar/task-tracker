import Box from '@material-ui/core/Box';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import Typography from '@material-ui/core/Typography';

const NoTasks = () => (
  <Box
    display='flex'
    flexDirection='column'
    justifyContent='center'
    alignItems='center'
    style={{minHeight: '50vh'}}
  >
    <NotInterestedIcon color='disabled' style={{fontSize: 70}} />
    <Typography variant='h4'>You have no tasks</Typography>
  </Box>
);
export default NoTasks;
