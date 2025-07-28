export interface TaskProps {
	id: string;
	title: string
	description?: string
	startDate?: Date
	endDate?: Date
	status: 'todo' | 'in_progress' | 'ready'
}