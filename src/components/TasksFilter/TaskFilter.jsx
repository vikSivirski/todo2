import { Component } from 'react';
import PropTypes from 'prop-types';

class TaskFilter extends Component {
  state = {
    buttonsFilter: [
      {
        id: crypto.randomUUID(),
        buttonName: 'All',
        selected: true,
        filterName: 'all',
      },
      {
        id: crypto.randomUUID(),
        buttonName: 'Active',
        selected: false,
        filterName: 'active',
      },
      {
        id: crypto.randomUUID(),
        buttonName: 'Completed',
        selected: false,
        filterName: 'completed',
      },
    ],
  };
  render() {
    const { setFilter } = this.props;
    const filterElements = this.state.buttonsFilter.map((item) => {
      return (
        <li key={item.id}>
          <button
            className={item.selected ? 'selected' : 'not-selected'}
            onClick={() => setSelected(item.id, item.filterName)}
          >
            {item.buttonName}
          </button>
        </li>
      );
    });
    const setSelected = (id, filter) => {
      this.setState(({ buttonsFilter }) => {
        const newState = buttonsFilter.map((tab) => ({
          ...tab,
          selected: tab.id === id,
        }));
        setFilter(filter);

        return {
          buttonsFilter: newState,
        };
      });
    };

    return <ul className="filters">{filterElements}</ul>;
  }
}

TaskFilter.propTypes = {
  setFilter: PropTypes.func.isRequired,
};

TaskFilter.defaultProps = {
  setFilter: () => {},
};

export default TaskFilter;
