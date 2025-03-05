import { Component } from "react";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import Footer from "./Footer";
import "./App.css"

class App extends Component {
  render() {
    const todoData = [
      {
        className: "completed",
        taskDescr: "Completed task",
        id: crypto.randomUUID()
      },
      {
        className: "editing",
        taskDescr: "Editing task",
        id: crypto.randomUUID()
      },
      {
        className: "active",
        taskDescr: "Active task",
        id: crypto.randomUUID()
      }
    ]

    return (
      <div className="App">
        <section className="todoapp">
          <NewTaskForm />
          <section className="main">
            <TaskList todos={todoData} />
            <Footer />
          </section>
        </section>
      </div>
    );
  }

}

export default App;
