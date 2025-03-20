import { Component } from 'react';
import PropTypes from 'prop-types';

import './Task.css';

class Task extends Component {
  render() {
    const { taskDescr, id, onDeleted, onTogleDone, done, createdTime } = this.props;
    return (
      <li className={done ? 'completed' : 'active'} key={id}>
        <div className="view">
          <input className="toggle" type="checkbox" onClick={onTogleDone} />
          <label>
            <span className="description">{taskDescr}</span>
            <span className="created">created {createdTime}</span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy" onClick={onDeleted}></button>
        </div>
      </li>
    );
  }
}

Task.propTypes = {
  taskDescr: PropTypes.string,
  id: PropTypes.string,
  onDeleted: PropTypes.func.isRequired,
  onTogleDone: PropTypes.func.isRequired,
  done: PropTypes.bool,
  createdTime: PropTypes.string,
};

Task.defaultProps = {
  taskDescr: 'Текст не передан',
  id: crypto.randomUUID(),
  onDeleted: () => {},
  onTogleDone: () => {},
  done: false,
  createdTime: 'created less than 5 seconds ago',
};

export default Task;
