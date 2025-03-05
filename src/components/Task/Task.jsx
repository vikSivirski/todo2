import { Component } from "react";

class Task extends Component {
	render() {
		const {classMame, taskDescr, id} = this.props

		return (
			<li key={id} className={classMame} >
				<div className="view">
					<input className="toggle" type="checkbox"/>
						<label>
							<span className="description">{taskDescr}</span>
						</label>
						<button className="icon icon-edit"></button>
						<button className="icon icon-destroy"></button>
				</div>
			</li>
		)
	}
}

// const Task = ({classMame, taskDescr, id}) => {
// 	return (
// 		<li key={id} className={classMame} >
// 			<div className="view">
// 				<input className="toggle" type="checkbox"/>
// 					<label>
// 						<span className="description">{taskDescr}</span>
// 					</label>
// 					<button className="icon icon-edit"></button>
// 					<button className="icon icon-destroy"></button>
// 			</div>
// 		</li>
// 	)
// }

export default Task;