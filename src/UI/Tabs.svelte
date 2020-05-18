<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let items, activeItem;
</script>

<style>
  .tabs {
    margin-bottom: 40px;
  }

  ul {
    display: flex;
    justify-content: center;
    padding: 0;
    list-style-type: none;
  }
  li {
    margin: 0 16px;
    font-size: 18px;
    color: plum;
    cursor: pointer;
  }
  .active {
    color: green;
    border-bottom: 2px solid green;
    padding-bottom: 8px;
  }
</style>

<div class="tabs">
  <ul>
    {#each items as item}
      <li on:click={() => dispatch('tab-change', item)}>
        <div class:active={item === activeItem}>{item}</div>
      </li>
    {/each}
  </ul>
</div>
