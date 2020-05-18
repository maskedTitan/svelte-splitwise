<script>
  import Header from "./UI/Header.svelte";
  import Footer from "./UI/Footer.svelte";
  import Tabs from "./UI/Tabs.svelte";
  import CreateExpense from "./Expenses/CreateExpense.svelte";
  let items = ["Current Expenses", "Add New Expense"];
  let activeItem = "Current Expenses";

  const tabChange = e => {
    activeItem = e.detail;
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
  {#if activeItem === 'Current Polls'}
    <p>Poll List Component goes here</p>
  {:else if activeItem === 'Add New Expense'}
    <CreateExpense />
  {/if}
</main>

<Footer />
