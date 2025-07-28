import React from "react";


import { useStoreMap, useUnit } from "effector-react";
import { $tasks } from "../../models/tasks.ts";
import type {TaskProps} from "../../types/TaskTypes.ts";
import {getStatusText} from "../../helpers";
import {Task} from "./components/Task/Task.tsx";
import {$searchTaskValue} from "../TaskSearch/model.ts";
import {$endFilterDate, $startFilterDate} from "../TaskDateFilter/model.ts";

interface TasksColumnProps {
	status: TaskProps["status"];
}

export const TasksColumn: React.FC<TasksColumnProps> = ({ status }) => {
	const searchValue = useUnit($searchTaskValue);
	const startFilterDate = useUnit($startFilterDate);
	const endFilterDate = useUnit($endFilterDate);

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
								return task.title.toLowerCase().includes(searchValue.toLowerCase());
							}

							return task;
						})
						.filter((task) => {
								if (startFilterDate) {
									const taskDate = new Date(task.startDate).setHours(0, 0, 0, 0);
									const filterDate = new Date(startFilterDate).setHours(0, 0, 0, 0);
									return taskDate >= filterDate;
								}

							return task;
						})
						.filter((task) => {
							if (endFilterDate && task?.endDate) {
								const taskDate = new Date(task.endDate).setHours(23, 59, 59, 999);
								const filterDate = new Date(endFilterDate).setHours(23, 59, 59, 999);
								return taskDate <= filterDate;
							}

							return task;
						})
						.map((task) => <Task key={task.id} {...task} />)

				) : (
					<p className="text-sm text-gray-500 italic">Задач нет</p>
				)}
			</div>
		</div>
	);
};