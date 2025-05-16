import type { DateField } from '@prismicio/client';

export function formatDate(dateStr: DateField): string {
	if (!dateStr) return '';

	const date = new Date(dateStr);

	// Options for formatting the date
	const options: Intl.DateTimeFormatOptions = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	};

	return new Intl.DateTimeFormat('es-MX', options).format(date);
}
