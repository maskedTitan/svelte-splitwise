import { writable } from 'svelte/store';

const expenses = writable([
	{
		id: Math.random() * Date.now(),
		event: 'Birthday Treat',
		amount: 400,
		description: 'Treat for my 22nd Birthday'
	}
]);

export default expenses;
