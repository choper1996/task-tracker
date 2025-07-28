import React from 'react'
import { TaskStatus, TaskDate } from "./components";
import { useUnit } from "effector-react/compat";
import {setCurrentTask} from "../../../../models/tasks.ts";
import {openTaskSideBar} from "../../../TaskSideBar/model.ts";
import type {TaskProps} from "../../../../types/TaskTypes.ts";

export const Task: React.FC<TaskProps> = ({
	id,
	title,
	description,
	startDate = new Date(),
	endDate,
	status,
}) => {
	const setCurrentTaskEvent = useUnit(setCurrentTask);
	const openTaskSideBarEvent = useUnit(openTaskSideBar);

	const clickHandler = () => {
		setCurrentTaskEvent(id);
		openTaskSideBarEvent();
	}

	return (
		<div
			className='bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-4 hover:shadow-lg transition-shadow duration-200 cursor-pointer'
			onClick={clickHandler}
		>
			<div className='flex justify-between'>
				<h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2'>
					{title}
				</h3>

				<TaskStatus status={status} />
			</div>

			{description && (
				<p className='text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-3'>
					{description}
				</p>
			)}

			<div className='space-y-1 text-xs text-gray-500 dark:text-gray-400'>
				<TaskDate date={startDate} period="start" />

				<TaskDate date={endDate} period="end" />
			</div>
		</div>
	)
}
