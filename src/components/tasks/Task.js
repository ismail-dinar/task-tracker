import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import PropTypes from 'prop-types';
import * as moment from 'moment';
import Tooltip from '@material-ui/core/Tooltip';
import TaskObject from '../../types/Task';

const Task = ({task}) => {
  const formattedDate = moment(task.dueDate).format('YYYY-MM-DD');
  const style = {
    backgroundColor: '#f4f4f4',
  };

  const primaryTypographyProps = {
    variant: 'h6',
    color: 'primary',
  };

  const secondaryTypographyProps = {
    variant: 'subtitle2',
    color: 'textSecondary',
  };

  return (
    <ListItem className='py-2 my-2' style={style} dense>
      <ListItemText
        primaryTypographyProps={primaryTypographyProps}
        secondaryTypographyProps={secondaryTypographyProps}
        primary={task.text}
        secondary={formattedDate}
      />
      <ListItemIcon>
        <Tooltip title='Finish Task'>
          <Checkbox
            edge='start'
            tabIndex={-1}
            disableRipple
            aria-label='task-checkbox'
          />
        </Tooltip>
      </ListItemIcon>
      <ListItemSecondaryAction>
        <Tooltip title='Delete Task'>
          <IconButton edge='end' aria-label='delete-task'>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

Task.propTypes = {
  task: PropTypes.shape(TaskObject).isRequired,
};

export default Task;
