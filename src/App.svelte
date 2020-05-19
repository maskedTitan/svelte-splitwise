<script>
  import Header from "./UI/Header.svelte";
  import Footer from "./UI/Footer.svelte";
  import Tabs from "./UI/Tabs.svelte";
  import CreateExpense from "./Expenses/CreateExpense.svelte";
  import ExpenseList from "./Expenses/ExpenseList.svelte";

  let items = ["Current Expenses", "Add New Expense"];
  let activeItem = "Current Expenses";

  const tabChange = e => {
    activeItem = e.detail;
  };
  let friends = [
    {
      id: 1,
      name: "John Doe"
    },
    {
      id: 2,
      name: "Brian"
    },
    {
      id: 3,
      name: "Harry"
    }
  ];

  const addExpense = e => {
    const expense = e.detail;
    expenses = [...expenses, expense];
    activeItem = "Current Expenses";
  };
  const updateAmount = e => {
    const { id, friend } = e.detail;
    let updatedExpenses = [...expenses];
    updatedExpenses[0].amount = 200;
    expenses = updatedExpenses;
  };
</script>

<style>
  main {
    max-width: 960px;
    margin: 40px auto;
    height: 400px;
  }
</style>

<Header />
<main>
  <Tabs {items} {activeItem} on:tab-change={tabChange} />
  {#if activeItem === 'Current Expenses'}
    <ExpenseList {friends} on:update-amount={updateAmount} />
  {:else if activeItem === 'Add New Expense'}
    <CreateExpense {friends} on:add-expense={addExpense} />
  {/if}
</main>
