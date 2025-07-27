import { TasksColumn } from "../widgets/TasksColumn/TaskColumn.tsx";

import './App.css'



function App() {
	return (
		<div className='min-h-screen bg-white dark:bg-gray-900 p-4'>
			<header className='flex items-center gap-4 bg-white dark:bg-gray-900 fixed w-full left-0 top-0 p-4'>
				<h1 className='text-3xl font-bold text-gray-900 dark:text-white'>
					Task tracker
				</h1>

				<input
					type='text'
					placeholder='Поиск задач...'
					className='px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full max-w-xs'
				/>
			</header>

			<div className="flex items-start gap-4 pt-20">
				<TasksColumn status="todo" />

				<TasksColumn status="in_progress" />

				<TasksColumn status="ready" />
			</div>
		</div>
	)
}

export default App
