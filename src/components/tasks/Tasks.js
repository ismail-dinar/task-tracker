import List from '@material-ui/core/List';
import PropTypes from 'prop-types';
import Task from './Task';
import TaskObject from './TaskType';

const Tasks = ({tasks}) => (
  <List>
    {tasks.map((task) => (
      <Task key={task.id} task={task} />
    ))}
  </List>
);

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape(TaskObject)).isRequired,
};

export default Tasks;
