<script>
  import FriendStore from "../Stores/FriendStore.js";
  import Friend from "./Friend.svelte";

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
    background: orange;
    padding: 20px;
    width: 100%;
    border-radius: 6px;
    margin-top: 3rem;
  }

  h2 {
    color: whitesmoke;
    font-family: "Roboto Slab", serif;
    text-align: center;
  }
</style>

<div class="friends">
  <div class="friends-header">
    <h2>Your Friends</h2>
  </div>
  {#each $FriendStore as friend (friend.id)}
    <Friend {friend} />
  {/each}
  <h3>Add New Friend</h3>
  <form on:submit|preventDefault={addFriend}>
    <input type="text" bind:value={newFriend.name} />
    <button>Add Friend</button>
  </form>
</div>
