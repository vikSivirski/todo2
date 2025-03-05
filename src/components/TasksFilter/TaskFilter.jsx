import { Component } from "react";

class TaskFilter extends Component {

	render() {
		return (
			<ul className="filters">
				<li key={crypto.randomUUID()}>
					<button className="selected">All</button>
				</li>
				<li key={crypto.randomUUID()}>
					<button>Active</button>
				</li>
				<li key={crypto.randomUUID()}>
					<button>Completed</button>
				</li>
			</ul>
		)
	}
}

export default TaskFilter;