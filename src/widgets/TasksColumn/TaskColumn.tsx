import React from "react";

import type { TaskProps } from "../../entities/Task/types.ts";

import { Task } from "../../entities/Task/Task.tsx";
import { getStatusText } from "../../entities/Task/components/TaskStatus/helpers";
import { useStoreMap } from "effector-react";
import { $tasks } from "../../model/tasks.ts";

interface TasksColumnProps {
	status: TaskProps["status"];
}

export const TasksColumn: React.FC<TasksColumnProps> = ({ status }) => {
	const tasks = useStoreMap({
		store: $tasks,
		keys: [],
		fn: (tasks) => tasks.filter((t) => t.status === status),
	});


	return (
		<div className="flex flex-col w-full max-w-sm bg-gray-100 dark:bg-gray-800 rounded-2xl p-4 ">
			<h2 className="text-lg font-semibold text-gray-700 dark:text-white mb-4">
				{getStatusText(status)}
			</h2>

			<div className="flex flex-col gap-3">
				{tasks.length > 0 ? (
					tasks.map((task) => <Task key={task.id} {...task} />)
				) : (
					<p className="text-sm text-gray-500 italic">Задач нет</p>
				)}
			</div>
		</div>
	);
};