import React from "react";


import { useStoreMap, useUnit } from "effector-react";
import { $tasks } from "../../models/tasks.ts";
import type {TaskProps} from "../../types/TaskTypes.ts";
import {getStatusText} from "../../helpers";
import {Task} from "./components/Task/Task.tsx";
import {$searchTaskValue} from "../TaskSearch/model.ts";

interface TasksColumnProps {
	status: TaskProps["status"];
}

export const TasksColumn: React.FC<TasksColumnProps> = ({ status }) => {
	const searchValue = useUnit($searchTaskValue)

	const filterTasks = (tasks: TaskProps[]) => {
		return tasks.filter((t) => t.status === status)
	}

	const tasks = useStoreMap({
		store: $tasks,
		keys: [],
		fn: filterTasks,
	});


	return (
		<div className="flex flex-col w-full max-w-sm bg-gray-100 dark:bg-gray-800 rounded-2xl p-4 ">
			<h2 className="text-lg font-semibold text-gray-700 dark:text-white mb-4">
				{getStatusText(status)}
			</h2>

			<div className="flex flex-col gap-3">
				{tasks.length > 0 ? (
					tasks
						.filter((task) => {
							if (searchValue) {
								return task.title.includes(searchValue);
							}

							return task
						})
						.map((task) => <Task key={task.id} {...task} />)

				) : (
					<p className="text-sm text-gray-500 italic">Задач нет</p>
				)}
			</div>
		</div>
	);
};