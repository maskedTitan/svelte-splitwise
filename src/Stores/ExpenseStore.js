import { writable } from 'svelte/store';

let expensesData = [
	{
		id: 1,
		event: 'Birthday Treat',
		amount: 400,
		description: 'Treat for my 22nd Birthday'
	}
];

const expenses = writable(expensesData);

export let duplicateExpenses = [ ...expensesData ];

const customExpenseStore = {
	subscribe: expenses.subscribe,
	addExpense: (expenseData) => {
		const newExpense = {
			...expenseData,
			id: Math.random() * Date.now()
		};
		duplicateExpenses.push(newExpense);
		expenses.update((items) => {
			return [ newExpense, ...items ];
		});
	},
	updateAmount: (id, newAmount) => {
		expenses.update((items) => {
			const expenseIndex = items.findIndex((i) => i.id === id);
			const updatedExpense = { ...items[expenseIndex], amount: newAmount };
			const updatedExpenses = [ ...items ];
			updatedExpenses[expenseIndex] = updatedExpense;

			return updatedExpenses;
		});
	}
};

export default customExpenseStore;
