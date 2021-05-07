import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import PropTypes from 'prop-types';
import * as moment from 'moment';
import TaskObject from '../../types/Task';

const Task = ({task}) => {
  const formattedDate = moment(task.dueDate).format('YYYY-MM-DD');

  return (
    <ListItem role={undefined} dense>
      <ListItemText primary={task.text} secondary={formattedDate} />
      <ListItemIcon>
        <Checkbox
          edge='start'
          tabIndex={-1}
          disableRipple
          aria-label='task-checkbox'
        />
      </ListItemIcon>
      <ListItemSecondaryAction>
        <IconButton edge='end' aria-label='delete-task'>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

Task.propTypes = {
  task: PropTypes.shape(TaskObject).isRequired,
};

export default Task;
