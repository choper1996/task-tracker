import type { TaskProps } from "../../entities/Task/types.ts";

export const MOCK_TASKS: TaskProps[] = [
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
		status: "in_progress",
		startDate: new Date("2019-03-01"),
		endDate: new Date("2025-07-30"),
	},
	{
		id: 2,
		title: 'Задача #3',
		description: 'Создать компонент Dashboard',
		status: 'ready',
		startDate: new Date("2019-03-01"),
		endDate: new Date("2025-07-30"),
	}
];