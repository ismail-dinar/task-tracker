import PropTypes from 'prop-types';

const TaskObject = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  createdAt: PropTypes.instanceOf(Date).isRequired,
  dueDate: PropTypes.instanceOf(Date).isRequired,
};

export default TaskObject;
