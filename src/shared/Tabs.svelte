<script>
  import { createEventDispatcher } from "svelte"
  const dispatch = createEventDispatcher()
  export let list = ["Home", "About"]
  export let active = list[0]
 
</script>

{#if list.length > 0}
  <nav>
    <ul>
      {#each list as item}
        <li>
          <button
            on:click={() => {dispatch("tabChange", item)}}
            class:active={item === active}
          >
            {item}
          </button>
        </li>
      {/each}
    </ul>
  </nav>
{/if}

<style>
  :root {
    --red-color: #d91b41;
    --gray-color: #555;
  }
  nav {
    text-align: center;
    margin-bottom: 40px;
  }
  nav ul {
    display: flex;
    text-align: center;
    justify-content: center;
  }
  li {
    margin: 0 16px;
    font-size: 18px;
  }
  li button {
    border-bottom: 2px solid white;
    color: var(--gray-color);
  }

  .active {
    color: var(--red-color);
    border-bottom: 2px solid var(--red-color);
    transition: all 150ms ease-in-out;
  }
</style>
