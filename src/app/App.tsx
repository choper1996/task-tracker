import Task from '../entities/Task/Task.tsx'
import { MOCK_TASKS } from './config/MOCK_TASKS.ts'

import './App.css'


function App() {
	return (
		<div className='min-h-screen bg-white dark:bg-gray-900 p-4'>
			<header className='flex items-center gap-4 mb-8'>
				<h1 className='text-3xl font-bold text-gray-900 dark:text-white'>
					Task tracker
				</h1>

				<input
					type='text'
					placeholder='Поиск задач...'
					className='px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full max-w-xs'
				/>
			</header>

			<section>
				{MOCK_TASKS.map(task => (
					<Task key={task.id} {...task} />
				))}
			</section>
		</div>
	)
}

export default App
