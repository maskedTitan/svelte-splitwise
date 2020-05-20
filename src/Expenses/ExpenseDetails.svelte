<script>
  import FriendStore from "../Stores/FriendStore.js";
  import ExpenseStore from "../Stores/ExpenseStore.js";
  import Card from "../UI/Card.svelte";

  export let expense;
  let defaultFriend = "";

  function join(defaultFriend) {
    if (defaultFriend.length === 1) return defaultFriend[0];
    return `${defaultFriend.slice(0, -1).join(", ")} and ${
      defaultFriend[defaultFriend.length - 1]
    }`;
  }
  function updateAmount(friend, id) {
    ExpenseStore.update(currentExpenses => {
      const checkboxCount = document.querySelectorAll(
        'input[type="checkbox"]:checked'
      );
      let updatedExpenses = [...currentExpenses];
      console.log($ExpenseStore[0].amount);

      updatedExpenses[0].amount = (400 / (checkboxCount.length + 1)).toFixed(2);

      return updatedExpenses;
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
      {#each $FriendStore as friend (friend.id)}
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
