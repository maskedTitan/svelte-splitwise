<script>
  import Button from "../UI/Button.svelte";
  let fields = {
    event: "",
    amount: 0,
    description: ""
  };
  const handleSubmit = e => {
    console.log(fields);
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
  label {
    margin: 10px 10px;
    text-align: left;
  }
</style>

<form on:submit|preventDefault={handleSubmit}>
  <div class="form-field">
    <label for="event">Event</label>
    <input type="text" id="event" bind:value={fields.event} />
  </div>
  <div class="form-field">
    <label for="amount">Amount</label>
    <input type="number" id="amount" bind:value={fields.amount} />
  </div>
  <div class="form-field">
    <label for="description">Description</label>
    <input type="text" id="description" bind:value={fields.description} />
  </div>
  <Button type="secondary" flat>Add Expense</Button>
</form>
