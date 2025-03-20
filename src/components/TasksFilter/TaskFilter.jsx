import { Component } from 'react';
import PropTypes from 'prop-types';

class TaskFilter extends Component {
  render() {
    const { setFilter } = this.props;
    return (
      <ul className="filters">
        <li key={crypto.randomUUID()}>
          <button className="selected" onClick={() => setFilter('all')}>
            All
          </button>
        </li>
        <li key={crypto.randomUUID()}>
          <button onClick={() => setFilter('active')}>Active</button>
        </li>
        <li key={crypto.randomUUID()}>
          <button onClick={() => setFilter('completed')}>Completed</button>
        </li>
      </ul>
    );
  }
}

TaskFilter.propTypes = {
  setFilter: PropTypes.func.isRequired,
};

TaskFilter.defaultProps = {
  setFilter: () => {},
};

export default TaskFilter;
