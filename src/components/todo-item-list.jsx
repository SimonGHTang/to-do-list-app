import TaskRow from "./task-components/task-row";

const TodoItemList = ({ taskList, ...rest }) => (
	<div>
		{taskList.map((task) => (
			<TaskRow
				key={task.id}
				task={task}
				{...rest}
			/>
		))}
	</div>
)

export default TodoItemList;
