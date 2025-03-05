import { Component } from "react";
import Task from "../Task/Task";
import "./TaskList.css";

class TaskList extends Component {
	render() {
		const { todos } = this.props;
		const elements = todos.map((item) => {
			console.log(item.id)
			return <Task
				classMame={item.classMame}
				taskDescr={item.taskDescr}
				id={item.id}
			/>
		})

		return (
			<ul className="todo-list">
				{elements}
			</ul>
		)
	}
}

// const TaskList = ({ todos }) => {
// 	const elements = todos.map((item)=> {
// 		console.log(item.id)
// 		return <Task
// 			classMame={item.classMame}
// 			taskDescr={item.taskDescr}
// 			id={item.id}
// 		/>
// 	})

// 	return(
// 		<ul className="todo-list">
// 			{ elements }
// 		</ul>
// 	)
// }

export default TaskList;