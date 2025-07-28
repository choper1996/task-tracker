import React, { useEffect, useRef, useState } from 'react';
import { useUnit } from 'effector-react';
import { $taskSidebarShown, closeTaskSideBar } from './model';
import { $currentTask, addTask, updateTask, deleteTask } from "../../model/tasks.ts";
import type {TaskProps} from "../../entities/Task/types.ts";
import { formatDate } from "../../entities/Task/components/TaskDate/helpers";

export const TaskSidebar: React.FC = () => {
	const ref = useRef<HTMLDivElement>(null);

	const addTaskEvent = useUnit(addTask);
	const updateTaskEvent = useUnit(updateTask);
	const deleteTaskEvent = useUnit(deleteTask);

	const currentTask = useUnit($currentTask);


	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [startDate, setStartDate] = useState('');
	const [endDate, setEndDate] = useState('');
	const [status, setStatus] = useState<TaskProps["status"]>('todo');

	const isOpen = useUnit($taskSidebarShown);
	const onClose = useUnit(closeTaskSideBar);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				onClose();
			}
		};

		if (isOpen) {
			document.addEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isOpen, onClose]);

	useEffect(() => {
		if (currentTask) {
			setTitle(currentTask.title || '');
			setDescription(currentTask.description || '');
			setStartDate(formatDate(currentTask.startDate));
			setEndDate(formatDate(currentTask.endDate));
			setStatus(currentTask.status || 'todo');
		} else {
			setTitle('');
			setDescription('');
			setStartDate('');
			setEndDate('');
			setStatus('todo');
		}
	}, [currentTask]);

	const onSubmit = (e: { preventDefault: () => void; }) => {
		e.preventDefault();

		const data = {
			title,
			description,
			startDate: startDate ? new Date(startDate) : new Date(),
			endDate: endDate ? new Date(endDate) : undefined,
			status
		}

		if (currentTask) {
			updateTaskEvent({ ...data, id: currentTask.id });
		} else {
			addTaskEvent({ ...data, id: crypto.randomUUID() });
		}

		onClose();
	};

	const onDelete = () => {
		if (!currentTask) {
			return
		}

		deleteTaskEvent(currentTask.id);
		onClose();
	}

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-50 flex justify-end">
			<div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

			<aside
				ref={ref}
				className="relative w-full sm:w-[400px] h-full bg-white dark:bg-gray-900 z-50 shadow-lg p-6 overflow-y-auto transition-transform duration-300"
			>
				<form className="flex flex-col gap-4 mt-auto mb-auto w-full" onSubmit={onSubmit}>
					<label>
						<span className="block text-sm font-medium mb-1">Название задачи *</span>
						<input
							type="text"
							required
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm dark:bg-gray-800 dark:text-white"
						/>
					</label>


					<label>
						<span className="block text-sm font-medium mb-1">Описание</span>
						<textarea
							value={description}
							onChange={(e) => setDescription(e.target.value)}
							className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm resize-none dark:bg-gray-800 dark:text-white"
						/>
					</label>


					<label>
						<span className="block text-sm font-medium mb-1">Дата начала</span>
						<input
							type="datetime-local"
							value={startDate}
							onChange={(e) => setStartDate(e.target.value)}
							className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm dark:bg-gray-800 dark:text-white"
						/>
					</label>


					<label>
						<span className="block text-sm font-medium mb-1">Дата окончания</span>
						<input
							type="datetime-local"
							value={endDate}
							onChange={(e) => setEndDate(e.target.value)}
							className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm dark:bg-gray-800 dark:text-white"
						/>
					</label>


					<label>
						<span className="block text-sm font-medium mb-1">Статус</span>
						<select
							value={status}
							onChange={(e) => setStatus(e.target.value as TaskProps["status"])}
							className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm dark:bg-gray-800 dark:text-white"
						>
							<option value="todo">To Do</option>
							<option value="in_progress">In Progress</option>
							<option value="ready">Ready</option>
						</select>
					</label>


					<div className="flex justify-between mt-4">
						<button
							type="button"
							className="px-4 py-2 text-gray-600 hover:text-gray-800 text-sm"
							onClick={onClose}
						>
							Отмена
						</button>
						<button
							type="submit"
							className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg"
						>
							{currentTask ? 'Сохранить' : 'Добавить'}
						</button>

						{currentTask && (
							<button
								type="button"
								className="px-4 py-2 text-red-600 text-sm font-medium rounded-lg"
								onClick={onDelete}
							>
								Удалить
							</button>
						)}
					</div>
				</form>
			</aside>
		</div>
	);
};
