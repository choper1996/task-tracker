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
	}).format(parsedDate);
};

export const formatDateForInput = (date?: Date) => {
	if (!date) return '';

	const dateByFormat = new Date(date);

	let month = '' + (dateByFormat.getMonth() + 1)
	let day = '' + dateByFormat.getDate()
	const year = dateByFormat.getFullYear()

	if (month.length < 2)
		month = '0' + month;
	if (day.length < 2)
		day = '0' + day;

	return [year, month, day].join('-');
}