<script>
  import Header from "./UI/Header.svelte";
  import Footer from "./UI/Footer.svelte";
  import Tabs from "./UI/Tabs.svelte";
  import CreateExpense from "./Expenses/CreateExpense.svelte";
  import ExpenseList from "./Expenses/ExpenseList.svelte";
  import FriendsList from "./Friends/FriendsList.svelte";
  let items = ["Current Expenses", "Add New Expense"];
  let activeItem = "Current Expenses";

  const tabChange = e => {
    activeItem = e.detail;
  };

  const addExpense = () => {
    activeItem = "Current Expenses";
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
    <ExpenseList />
  {:else if activeItem === 'Add New Expense'}
    <CreateExpense on:add-expense={addExpense} />
    <FriendsList />
  {/if}
</main>
