<script>
  import FriendStore from "../Stores/FriendStore.js";
  import Friend from "./Friend.svelte";
  import Button from "../UI/Button.svelte";

  let newFriend = {
    name: ""
  };
  let isValid;
  let error;
  const addFriend = () => {
    isValid = true;
    if (newFriend.name.length < 2) {
      error = "Please enter a valid name";
      isValid = false;
      setTimeout(() => {
        (error = ""), (isValid = true);
      }, 2000);
    } else {
      isValid = true;
    }
    if (isValid) {
      let friend = {
        ...newFriend,
        id: Math.random() * Date.now()
      };
      FriendStore.update(currentFriends => {
        return [...currentFriends, friend];
      });
    }
  };
</script>

<style>
  .friends-header {
    background: #c060a1;
    padding: 20px;
    width: 100%;
    border-radius: 6px;
    margin-top: 3rem;
  }

  .form-field {
    margin: 18px auto;
    text-align: center;
  }
  .friends-list {
    margin-top: 3rem;
    background: #ffdcb4;
    width: 103%;
    border-radius: 6px;
    padding: 5px;
  }

  h2 {
    color: whitesmoke;
    font-family: "Roboto Slab", serif;
    text-align: center;
  }
  h3 {
    color: white;
  }
  h4 {
    font-family: "Roboto Slab", serif;
    font-weight: bold;
    color: #c060a1;
    font-size: 20px;
  }

  .error {
    font-weight: bold;
    font-size: 12px;
    color: #e43f5a;
    background: #1b1b2f;
    padding: 10px 10px;
    border: 2px solid #162447;
    width: 50%;
    margin: 20px auto;
  }
</style>

<div class="friends">
  <div class="friends-header">
    <h2>Your Friends</h2>
  </div>
  <div class="friends-list">
    <h4>Friends:</h4>
    {#each $FriendStore as friend (friend.id)}
      <Friend {friend} />
    {/each}
  </div>

  <h3>Add New Friend</h3>
  <form on:submit|preventDefault={addFriend}>
    <div class="form-field">
      {#if isValid === false}
        <div class:error={isValid === false}>{error}</div>
      {/if}
      <input type="text" bind:value={newFriend.name} />
      <Button type="secondary" flat>Add Friend</Button>
    </div>
  </form>
</div>
