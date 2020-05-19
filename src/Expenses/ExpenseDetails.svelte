<script>
  import { createEventDispatcher } from "svelte";
  import Card from "../UI/Card.svelte";

  const dispatch = createEventDispatcher();
  export let expense;
  let defaultFriend = [""];
  export let friends;

  function join(defaultFriend) {
    if (defaultFriend.length === 1) return defaultFriend[0];
    return `${defaultFriend.slice(0, -1).join(", ")} and ${
      defaultFriend[defaultFriend.length - 1]
    }`;
  }
  function updateAmount(friend, id) {
    dispatch("update-amount", {
      friend,
      id
    });
  }
</script>

<style>
  .expense {
    text-align: center;
  }
  h3 {
    margin: 0 auto;
    color: #555;
  }
  .friends {
    display: flex;
    flex-direction: column;
  }
</style>

<Card>
  <div class="expense">
    <h3>{expense.event}</h3>
    <div class="amount">
      <p>Amount: {expense.amount} $</p>
    </div>
    <div class="description">
      {#if expense.description}
        <p>Description: {expense.description}</p>
      {/if}
    </div>
    <p>Split Expense with:</p>
    <div class="friends">
      {#each friends as friend (friend.id)}
        <label
          on:click={() => {
            updateAmount(friend.name, friend.id);
          }}>
          <input
            type="checkbox"
            bind:group={defaultFriend}
            value={friend.name} />
          {friend.name}
        </label>
      {/each}
    </div>
    {#if defaultFriend.length === 0}
      <p>Expense not being split with anyone</p>
    {:else}
      <p>Splitting expense with {join(defaultFriend)}</p>
    {/if}
  </div>
</Card>
