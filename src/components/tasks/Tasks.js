import List from '@material-ui/core/List';
import PropTypes from 'prop-types';
import Task from './Task';
import TaskObject from '../../types/Task';

const Tasks = ({tasks, onDelete}) => (
  <List className='w-50'>
    {tasks.map((task) => (
      <Task key={task.id} task={task} onDelete={onDelete} />
    ))}
  </List>
);

Tasks.defaultProps = {
  onDelete: (taskId) => {
    throw new Error(
      `Can't delete task ${taskId} Please provide an onDelete method`
    );
  },
};

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape(TaskObject)).isRequired,
  onDelete: PropTypes.func,
};

export default Tasks;
