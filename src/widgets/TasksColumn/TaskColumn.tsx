import React from "react";

import type { TaskProps } from "../../entities/Task/types.ts";
import { MOCK_TASKS_IN_PROGRESS, MOCK_TASKS_READY, MOCK_TASKS_TODO } from "../../app/config/MOCK_TASKS.ts";

import { Task } from "../../entities/Task/Task.tsx";
import { getStatusText } from "../../entities/Task/components/TaskStatus/helpers";

interface TasksColumnProps {
	status: TaskProps["status"];
}

export const TasksColumn: React.FC<TasksColumnProps> = ({ status }) => {
	let tasks:TaskProps[] = []

	if (status === "todo" ) {
		tasks = MOCK_TASKS_TODO
	} else if (status === "in_progress" ) {
		tasks = MOCK_TASKS_IN_PROGRESS
	} else if (status === "ready" ) {
		tasks = MOCK_TASKS_READY;
	}


	return (
		<div className="flex flex-col w-full max-w-sm bg-gray-100 dark:bg-gray-800 rounded-2xl p-4 shadow-md">
			<h2 className="text-lg font-semibold text-gray-700 dark:text-white mb-4">
				{getStatusText(status)}
			</h2>

			<div className="flex flex-col gap-3">
				{tasks.length > 0 ? (
					tasks.map((task) => <Task key={task.id} {...task} />)
				) : (
					<p className="text-sm text-gray-500 italic">No tasks</p>
				)}
			</div>
		</div>
	);
};