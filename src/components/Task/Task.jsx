import { Component } from 'react';
import PropTypes from 'prop-types';

import './Task.css';

class Task extends Component {
  render() {
    const { taskDescr, id, onDeleted, onTogleDone, done, createdTime, isEditing, onTogleEditing, onUpdateDescription } =
      this.props;
    const onSubmit = (e) => {
      e.preventDefault();
      onTogleEditing();
    };
    return (
      <li className={`${done ? 'completed' : 'active'} ${isEditing ? 'editing' : ''}`} key={id}>
        <div className="view">
          <input className="toggle" type="checkbox" onClick={onTogleDone} checked={done} />
          <label>
            <span className="description">{taskDescr}</span>
            <span className="created">created {createdTime}</span>
          </label>
          <button className="icon icon-edit" onClick={onTogleEditing}></button>
          <button className="icon icon-destroy" onClick={onDeleted}></button>
        </div>
        <form onSubmit={onSubmit}>
          <input type="text" className="edit" autoFocus onChange={(e) => onUpdateDescription(e.target.value)} />
        </form>
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
