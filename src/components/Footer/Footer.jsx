import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TaskFilter from '../TasksFilter';
import './Footer.css';

export default class Footer extends Component {
  render() {
    const { setFilter, clearCompleted, doneCounter } = this.props;
    return (
      <footer className="footer">
        <span className="todo-count">{doneCounter} items left</span>
        <TaskFilter setFilter={setFilter} />
        <button className="clear-completed" onClick={clearCompleted}>
          Clear completed
        </button>
      </footer>
    );
  }
}

Footer.propTypes = {
  clearCompleted: PropTypes.func,
  doneCounter: PropTypes.number,
};

Footer.defaultProps = {
  doneCounter: 0,
  clearCompleted: () => {},
};
