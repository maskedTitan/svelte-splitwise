<script>
  import Header from "./UI/Header.svelte";
  import Footer from "./UI/Footer.svelte";
  import UserGrid from "./Users/UserGrid.svelte";
  let users = [
    {
      id: 1,
      name: "John Doe",
      money: ""
    },
    {
      id: 2,
      name: "Brian Williams",
      money: null
    },
    {
      id: 3,
      name: "Lucas Wright",
      money: null
    }
  ];
  let newUser = "";
  let inputState;
  function addUser() {
    if (newUser.length === 0) {
      inputState = "invalid";
    } else {
      users = [
        ...users,
        {
          id: 4,
          name: newUser
        }
      ];
      newUser = "";
      inputState = "success";
    }
  }

  function addMoney() {
    users.forEach(user => {
      user.money = "200$";
    });
  }
</script>

<style>
  .users {
    margin-top: 5rem;
    margin-left: 0.5rem;
  }
</style>

<Header />
<section class="users">
  {#if inputState === 'invalid'}
    <p>Please enter a valid input</p>
  {:else if inputState === 'success'}
    <p>Added successfully</p>
  {/if}
  <h1>Your Friends</h1>

  <UserGrid {users} />

</section>
<input type="text" bind:value={newUser} />
<button on:click={addUser}>Add User</button>
<button on:click={addMoney}>Add Money</button>
<Footer />
