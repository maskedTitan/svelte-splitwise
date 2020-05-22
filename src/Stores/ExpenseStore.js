import { writable } from 'svelte/store';

const expenses = writable([
	{
		id: 1,
		event: 'Birthday Treat',
		amount: 400,
		description: 'Treat for my 22nd Birthday'
	}
]);

const customExpenseStore = {
	subscribe: expenses.subscribe,
	addExpense: (expenseData) => {
		const newExpense = {
			...expenseData,
			id: Math.random() * Date.now()
		};
		expenses.update((items) => {
			return [ newExpense, ...items ];
		});
	},
	updateAmount: (id, newAmount) => {
		expenses.update((items) => {
			const expenseIndex = items.findIndex((i) => i.id === id);
			const updatedExpense = { ...items[expenseIndex], newAmount };
			const updatedExpenses = [ ...items ];
			updatedExpenses[expenseIndex] = updatedExpense;

			return updatedExpenses;
		});
	}
};

export default customExpenseStore;

// {
//     id: Math.random() * Date.now(),
//     event: 'Birthday Treat',
//     amount: 400,
//     description: 'Treat for my 22nd Birthday',
//     friends: [{
// 	id: 1,
// 	name: 'John Doe'
// },
// {
// 	id: 2,
// 	name: 'Brian'
// },
// {
// 	id: 3,
// 	name: 'Harry'
// }]
// }
