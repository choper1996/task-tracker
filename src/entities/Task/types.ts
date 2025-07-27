export interface TaskProps {
	id: number;
	title: string
	description?: string
	startDate?: Date
	endDate?: Date
	status: 'todo' | 'in_progress' | 'ready'
}