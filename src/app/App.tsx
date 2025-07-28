import { TasksColumn } from "../widgets/TasksColumn/TaskColumn.tsx";
import { TaskSidebar } from "../widgets/TaskSideBar/TaskSideBar.tsx";

import { useUnit } from "effector-react";
import { openTaskSideBar } from "../widgets/TaskSideBar/model.ts";

import {clearCurrentTask} from "../models/tasks.ts";
import {TaskSearch} from "../widgets/TaskSearch/TaskSearch.tsx";

import './App.css'
import {TaskDateFilter} from "../widgets/TaskDateFilter/TaskDateFilter.tsx";



function App() {
	const showTaskSidebarEvent = useUnit(openTaskSideBar)
	const clearCurrentTaskEvent = useUnit(clearCurrentTask)

	const showTaskSidebar = () => {
		clearCurrentTaskEvent();
		showTaskSidebarEvent();
	};

	return (
		<div className='min-h-screen bg-white dark:bg-gray-900 p-4'>
			<header className='flex items-center gap-4 bg-white dark:bg-gray-900 fixed w-full left-0 top-0 p-4'>
				<h1 className='text-3xl font-bold text-gray-900 dark:text-white'>
					Task tracker
				</h1>

				<TaskSearch />

				<TaskDateFilter />

				<button
					onClick={showTaskSidebar}
					className="px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:text-white text-gray-600 text-sm font-medium rounded-2xl shadow transition duration-200"
				>
					+ Добавить задачу
				</button>
			</header>

			<div className="flex items-start gap-4 pt-25">
				<TasksColumn status="todo" />

				<TasksColumn status="in_progress" />

				<TasksColumn status="ready" />
			</div>

			<TaskSidebar />
		</div>
	)
}

export default App
