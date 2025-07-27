import type { TaskProps } from "../../entities/Task/types.ts";

export const MOCK_TASKS_TODO: TaskProps[] = [
	{
		id: 0,
		title: 'Задача #1',
		description: 'Создать компонент Task',
		status: 'todo',
		startDate: new Date("2019-03-01"),
		endDate: new Date("2025-07-30"),
	},
	{
		id: 1,
		title: 'Задача #2',
		description: 'Создать компонент Column',
		status: "todo",
		startDate: new Date("2019-03-01"),
		endDate: new Date("2025-07-30"),
	},
	{
		id: 2,
		title: 'Задача #3',
		description: 'Создать компонент Dashboard',
		status: 'todo',
		startDate: new Date("2019-03-01"),
		endDate: new Date("2025-07-30"),
	},
	{
		id: 9,
		title: 'Задача #1',
		description: 'Создать компонент Task',
		status: 'todo',
		startDate: new Date("2019-03-01"),
		endDate: new Date("2025-07-30"),
	},
	{
		id: 10,
		title: 'Задача #2',
		description: 'Создать компонент Column',
		status: "todo",
		startDate: new Date("2019-03-01"),
		endDate: new Date("2025-07-30"),
	},
	{
		id: 11,
		title: 'Задача #3',
		description: 'Создать компонент Dashboard',
		status: 'todo',
		startDate: new Date("2019-03-01"),
		endDate: new Date("2025-07-30"),
	},
	{
		id: 12,
		title: 'Задача #1',
		description: 'Создать компонент Task',
		status: 'todo',
		startDate: new Date("2019-03-01"),
		endDate: new Date("2025-07-30"),
	},
	{
		id: 13,
		title: 'Задача #2',
		description: 'Создать компонент Column',
		status: "todo",
		startDate: new Date("2019-03-01"),
		endDate: new Date("2025-07-30"),
	},
	{
		id: 14,
		title: 'Задача #3',
		description: 'Создать компонент Dashboard',
		status: 'todo',
		startDate: new Date("2019-03-01"),
		endDate: new Date("2025-07-30"),
	}
];

export const MOCK_TASKS_IN_PROGRESS: TaskProps[] = [
	{
		id: 4,
		title: 'Задача #5',
		description: 'Создать компонент Task',
		status: 'in_progress',
		startDate: new Date("2019-03-01"),
		endDate: new Date("2025-07-30"),
	},
	{
		id: 5,
		title: 'Задача #6',
		description: 'Создать компонент Column',
		status: "in_progress",
		startDate: new Date("2019-03-01"),
		endDate: new Date("2025-07-30"),
	},
	{
		id: 6,
		title: 'Задача #7',
		description: 'Создать компонент Dashboard',
		status: 'in_progress',
		startDate: new Date("2019-03-01"),
		endDate: new Date("2025-07-30"),
	}
];

export const MOCK_TASKS_READY: TaskProps[] = [
	{
		id: 4,
		title: 'Задача #8',
		description: 'Создать компонент Task',
		status: 'ready',
		startDate: new Date("2019-03-01"),
		endDate: new Date("2025-07-30"),
	},
	{
		id: 5,
		title: 'Задача #9',
		description: 'Создать компонент Column',
		status: "ready",
		startDate: new Date("2019-03-01"),
		endDate: new Date("2025-07-30"),
	},
	{
		id: 6,
		title: 'Задача #10',
		description: 'Создать компонент Dashboard',
		status: 'ready',
		startDate: new Date("2019-03-01"),
		endDate: new Date("2025-07-30"),
	}
];