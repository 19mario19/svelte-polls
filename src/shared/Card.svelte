<script>
  import { blur } from "svelte/transition"
  export let border = false
  export let animate = false
</script>

<div class="card" class:border class:animate transition:blur>
  <slot />
</div>

<style>
  :root {
    --swing: 1deg;
  }
  .card {
    background-color: #fff;
    border-radius: 12px;
    padding: 1rem 1.5rem;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    width: 350px;
    transition: all 0.3s ease-in-out;
  }

  .card:hover {
    transform: scale(1.02);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  .border {
    background-color: #f717170a;
    border: 2px solid #4e4a4a;
    transition: all 350ms ease-in-out;
  }

  .animate:hover {
    animation: hang 550ms ease-in-out  50ms;
  }

  @keyframes hang {
    0% {
      transform: rotate(calc(-1 * var(--swing)));
    }
    50% {
      transform: rotate(--swing);
    }
  }
</style>
