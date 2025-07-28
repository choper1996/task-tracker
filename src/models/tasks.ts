import {createEvent, createStore, sample} from 'effector';
import {closeTaskSideBar} from "../widgets/TaskSideBar/model.ts";
import type {TaskProps} from "../types/TaskTypes.ts";

const saved = localStorage.getItem('tasks');
const initialTasks: TaskProps[] = saved ? JSON.parse(saved) : [];

export const addTask = createEvent<TaskProps>();
export const updateTask = createEvent<TaskProps>();
export const deleteTask = createEvent<string>();

export const $tasks = createStore<TaskProps[]>(initialTasks)
	.on(addTask, (state, task) => [...state, task])
	.on(updateTask, (state, updated) =>
		state.map((task) => (task.id === updated.id ? updated : task))
	)
	.on(deleteTask, (state, id) => state.filter((t) => t.id !== id))

$tasks.watch((tasks) => {
	localStorage.setItem('tasks', JSON.stringify(tasks));
});

sample({
	clock: [updateTask, deleteTask, addTask],
	source: $tasks,
	fn: (tasks) => localStorage.setItem('tasks', JSON.stringify(tasks))
})

export const setCurrentTask = createEvent<TaskProps["id"]>();
export const clearCurrentTask = createEvent();

export const $currentTask = createStore<TaskProps | null>(null)
	.on(clearCurrentTask, () => null)

sample({
	clock: closeTaskSideBar,
	target: clearCurrentTask,
});

sample({
	clock: setCurrentTask,
	source: $tasks,
	fn: (tasks, clock) => tasks.find(({ id }) => id == clock) || null,
	target: $currentTask
})
