import type { TaskProps } from "../../../types.ts";

import styles from "../TaskStatus.module.css"

export const getStatusClass = (status: TaskProps['status']) => {
	switch (status) {
		case 'todo':
			return styles.status_todo
		case 'in_progress':
			return styles.status_in_progress
		case 'ready':
			return styles.status_ready
		default:
			return styles.status_unknown
	}
}