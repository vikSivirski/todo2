import { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';

import Task from '../Task/Task';
import './TaskList.css';

class TaskList extends Component {
  render() {
    const { todos, onTogleDone, onDeleted } = this.props;

    const elements = todos.map((item) => {
      const distanceToNow = formatDistanceToNow(item.createdTime, {
        addSuffix: true,
        includeSeconds: true,
      });
      return (
        <Task
          key={item.id}
          className={item.className}
          taskDescr={item.taskDescr}
          onDeleted={() => onDeleted(item.id)}
          onTogleDone={() => onTogleDone(item.id)}
          done={item.done}
          createdTime={distanceToNow}
          id={item.id}
        />
      );
    });

    return <ul className="todo-list">{elements}</ul>;
  }
}

TaskList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      taskDescr: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onTogleDone: PropTypes.func.isRequired,
  onDeleted: PropTypes.func.isRequired,
};

TaskList.defaultProps = {
  todos: [],
  onTogleDone: () => {},
  onDeleted: () => {},
};

export default TaskList;
