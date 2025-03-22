import { Component } from 'react';

import NewTaskForm from './NewTaskForm';
import TaskList from './TaskList';
import Footer from './Footer';
import './App.css';

class App extends Component {
  state = {
    todoData: [
      {
        done: false,
        taskDescr: 'Completed task',
        createdTime: new Date(),
        id: crypto.randomUUID(),
        isEditing: false,
      },
      {
        done: false,
        taskDescr: 'Editing task',
        createdTime: new Date(),
        id: crypto.randomUUID(),
        isEditing: false,
      },
      {
        done: false,
        taskDescr: 'Active task',
        createdTime: new Date(),
        id: crypto.randomUUID(),
        isEditing: false,
      },
    ],
    filter: 'all',
  };

  onItemAdded = (text) => {
    const newItem = {
      done: false,
      taskDescr: text,
      createdTime: new Date(),
      id: crypto.randomUUID(),
      isEditing: false,
    };

    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem];

      return {
        todoData: newArr,
      };
    });
  };

  onDeleted = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);

      const newArr = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

      return {
        todoData: newArr,
      };
    });
  };

  onTogleDone = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const oldItem = { ...todoData[idx] };
      const newItem = { ...oldItem, done: !oldItem.done };

      const newArr = [...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)];

      return {
        todoData: newArr,
      };
    });
  };

  onTogleEditing = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const oldItem = { ...todoData[idx] };
      const newItem = { ...oldItem, isEditing: !oldItem.isEditing };
      const newData = [...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)];
      return {
        todoData: newData,
      };
    });
  };

  onUpdateDescription = (id, newDescription) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const oldItem = { ...todoData[idx] };
      const newItem = { ...oldItem, taskDescr: newDescription };
      const newData = [...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)];

      return {
        todoData: newData,
      };
    });
  };

  clearCompleted = () => {
    this.setState(({ todoData }) => {
      const newArr = todoData.filter((el) => !el.done);

      return {
        todoData: newArr,
      };
    });
  };

  setFilter = (filter) => {
    this.setState({ filter });
  };

  filterTodos = () => {
    const { todoData, filter } = this.state;
    switch (filter) {
      case 'active':
        return todoData.filter((todo) => !todo.done);
      case 'completed':
        return todoData.filter((todo) => todo.done);
      default:
        return todoData;
    }
  };

  filteredTodos = this.filterTodos(this.state.todoData, this.allTodos);

  render() {
    const doneCounter = this.state.todoData.filter((el) => el.done).length;

    return (
      <div className="App">
        <section className="todoapp">
          <NewTaskForm onItemAdded={this.onItemAdded} />
          <section className="main">
            <TaskList
              todos={this.filterTodos()}
              onTogleDone={this.onTogleDone}
              onDeleted={this.onDeleted}
              onTogleEditing={this.onTogleEditing}
              onUpdateDescription={this.onUpdateDescription}
            />
            <Footer setFilter={this.setFilter} clearCompleted={this.clearCompleted} doneCounter={doneCounter} />
          </section>
        </section>
      </div>
    );
  }
}

export default App;
