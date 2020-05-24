<script>
  import FriendStore from "../Stores/FriendStore.js";
  import expenses, { duplicateExpenses } from "../Stores/ExpenseStore.js";
  import Card from "../UI/Card.svelte";
  import Button from "../UI/Button.svelte";

  export let expense;
  let defaultFriend = "";

  let expenseList = "";

  const unsubscribe = expenses.subscribe(items => {
    expenseList = items;
  });

  function join(defaultFriend) {
    if (defaultFriend.length === 1) return defaultFriend[0];
    return `${defaultFriend.slice(0, -1).join(", ")} and ${
      defaultFriend[defaultFriend.length - 1]
    }`;
  }
  function handleUpdate(friend, id) {
    const checkboxCount = document.querySelectorAll(
      'input[type="checkbox"]:checked'
    );
    const expenseIndex = duplicateExpenses.findIndex(
      expense => expense.id === id
    );

    let updatedAmount = (
      duplicateExpenses[expenseIndex].amount /
      (checkboxCount.length + 1)
    ).toFixed(2);

    expenses.updateAmount(id, updatedAmount);
  }

  function handleRemove() {
    expenses.removeExpense(expense.id);
  }
  function displayAlert() {
    console.log("no expenses");
  }
</script>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
  .expense {
    text-align: center;
    background: #1f4068;
    color: #f8f3eb;
    font-family: "Poppins", sans-serif;
  }

  h3 {
    padding-top: 1rem;
    margin: 0 auto;
    color: #f8f3eb;
    font-size: 30px;
  }
  p {
    padding-bottom: 1rem;
    font-weight: bold;
    color: whitesmoke;
  }
  .friends {
    display: flex;
    flex-direction: column;
    font-weight: 400;
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
            handleUpdate(friend.name, expense.id);
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
    <Button mode="primary">
      <span on:click={handleRemove}>Remove Expense</span>
    </Button>
  </div>
</Card>
