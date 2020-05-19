<script>
  import { onDestroy, onMount } from "svelte";
  import ExpenseStore from "../Stores/ExpenseStore.js";
  import ExpenseDetails from "./ExpenseDetails.svelte";
  export let friends = [];

  //   const unsub = ExpenseStore.subscribe(data => {
  //     expenses = data;
  //   });

  //   onDestroy(() => {
  //     unsub();
  //   });
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
    <ExpenseDetails {expense} {friends} on:update-amount />
  {/each}

</div>
