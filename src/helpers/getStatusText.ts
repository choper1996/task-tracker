import type {TaskProps} from "../types/TaskTypes.ts";

export const getStatusText = (status: TaskProps['status']) => {
	switch (status) {
		case 'todo':
			return 'К выполнению'
		case 'in_progress':
			return 'В работе'
		case 'ready':
			return 'Готово'
		default:
			return 'Неизвестно'
	}
}