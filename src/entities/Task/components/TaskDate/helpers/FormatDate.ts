export const formatDate = (date: Date | string | null | undefined): string => {
	if (!date) return '';

	const parsedDate = typeof date === 'string' ? new Date(date) : date;

	if (!(parsedDate instanceof Date) || isNaN(parsedDate.getTime())) {
		return '';
	}

	return new Intl.DateTimeFormat('ru-RU', {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
	}).format(parsedDate);
};