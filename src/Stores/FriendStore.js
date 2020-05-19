import { writable } from 'svelte/store';

const friends = writable([
	{
		id: 1,
		name: 'John Doe'
	},
	{
		id: 2,
		name: 'Brian'
	},
	{
		id: 3,
		name: 'Harry'
	}
]);

export default friends;
