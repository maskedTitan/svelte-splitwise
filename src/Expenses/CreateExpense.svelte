<script>
  import { createEventDispatcher } from "svelte";
  import expenses, { duplicateExpenses } from "../Stores/ExpenseStore.js";
  import Button from "../UI/Button.svelte";

  const dispatch = createEventDispatcher();

  let fields = {
    event: "",
    amount: "",
    description: ""
  };
  let errors = {
    event: "",
    amount: "",
    description: ""
  };
  let isValid;
  const handleSubmit = e => {
    isValid = true;
    if (fields.event.trim().length < 3) {
      isValid = false;
      errors.event = "Please enter a valid event";
      setTimeout(() => {
        errors.event = "";
        isValid = true;
      }, 2000);
    } else {
      errors.event = "";
    }
    if (fields.amount === "") {
      isValid = false;
      errors.amount = "Please enter amount for the event";
      setTimeout(() => {
        errors.amount = "";
        isValid = true;
      }, 2000);
    } else {
      errors.amount = "";
    }
    if (isValid) {
      let expense = {
        ...fields
      };
      //save expense to store
      expenses.addExpense(expense);
      console.log(duplicateExpenses);
      dispatch("add-expense");
    }
  };
</script>

<style>
  form {
    width: 400px;
    margin: 0 auto;
    text-align: center;
  }
  .form-field {
    margin: 18px auto;
  }

  input {
    width: 100%;
    border-radius: 6px;
  }
  textarea {
    width: 100%;
    border-radius: 6px;
  }
  label {
    margin: 10px 10px;
    text-align: left;
    color: white;
  }
  .error {
    font-weight: bold;
    font-size: 12px;
    color: white;
    background: lightpink;
    padding: 10px 10px;
    border: 2px solid maroon;
  }
</style>

<form on:submit|preventDefault={handleSubmit}>
  <div class="form-field">
    <label for="event">Event</label>
    <input type="text" id="event" bind:value={fields.event} />
    <div class:error={isValid === false}>{errors.event}</div>
  </div>
  <div class="form-field">
    <label for="amount">Amount</label>
    <input type="number" id="amount" bind:value={fields.amount} />
    <div class:error={isValid === false}>{errors.amount}</div>
  </div>
  <div class="form-field">
    <label for="description">Description [optional]</label>
    <textarea type="text" id="description" bind:value={fields.description} />
  </div>

  <Button type="secondary" flat>Add Expense</Button>
</form>
