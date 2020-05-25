<script>
  import { onDestroy, onMount } from "svelte";
  import { fade, scale, slide } from "svelte/transition";
  import { flip } from "svelte/animate";
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
    <div in:fade out:scale|local animate:flip={{ duration: 500 }}>
      <ExpenseDetails {expense} {friends} />
    </div>
  {/each}

</div>
