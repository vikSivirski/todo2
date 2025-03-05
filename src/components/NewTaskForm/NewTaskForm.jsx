import { Component } from "react"
import "./NewTaskForm.css"

class NewTaskForm extends Component {
	render() {
		return (
			<header className="header">
				<h1>todos</h1>
				<input className="new-todo" placeholder="What needs to be done?" autoFocus/>
			</header>
		)
	}
}

export default NewTaskForm