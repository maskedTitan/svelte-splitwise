<script>
  import User from "./User.svelte";
  export let users;
</script>

<style>
  section {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }

  @media (min-width: 768px) {
    section {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>

<section class="users">
  {#each users as user}
    <User name={user.name} money={user.money} />
  {/each}
</section>
