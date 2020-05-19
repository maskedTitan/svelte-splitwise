<script>
  import ExpenseDetails from "./ExpenseDetails.svelte";
  export let expenses, friends;
</script>

<style>
  .expense-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
</style>

<div class="expense-list">
  {#each expenses as expense (expense.id)}
    <ExpenseDetails {expense} {friends} on:update-amount />
  {/each}

</div>
