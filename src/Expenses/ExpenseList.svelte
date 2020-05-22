<script>
  import { onDestroy, onMount } from "svelte";
  import ExpenseStore from "../Stores/ExpenseStore.js";
  import ExpenseDetails from "./ExpenseDetails.svelte";
  export let friends = [];
</script>

<style>
  .expense-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
</style>

<div class="expense-list">
  {#each $ExpenseStore as expense (expense.id)}
    <ExpenseDetails {expense} {friends} />
  {/each}

</div>
