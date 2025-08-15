import TaskRow from "./task-components/task-row";

const TodoItemList = ({ taskList, ...rest }) => (
	<div>
		{taskList.map((task, key) => (
			<TaskRow
				key={key}
				task={task}
				{...rest}
			/>
		))}
	</div>
)

export default TodoItemList;
