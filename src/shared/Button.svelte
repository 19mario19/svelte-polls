<script>
  export let type = "primary"
  export let flat = false
  export let inverse = false
  export let animate = true
  export let shake = false
  export let radius = 10
  export let disabled = false
  $: pixelAmount = `${radius}px`
</script>

<button
  on:click
  class={type}
  class:flat
  class:inverse
  class:animate
  class:shake
  style={`--pixel-amount: ${pixelAmount};`}
  {disabled}
>
  <slot />
</button>

<style>
  :root {
    --pixel-amount: 2px;
  }
  button {
    border: 0;
    cursor: pointer;
    border-radius: var(--pixel-amount);
    padding: 8px 12px;
    font-weight: bold;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
    border: 2px solid;
  }

  button:disabled {
    filter: blur(2px) invert(1);
  }

  .animate {
    transition: all 0.3s ease, transform 0.2s ease-in-out;
  }

  .animate:hover {
    transform: scale(1.01);
    border: 2px solid black;
  }
  .animate:active {
    transform: scale(0.97);
    filter: blur(2px) invert(1);
  }

  .shake:hover {
    animation: shake 350ms ease-in-out;
  }

  @keyframes shake {
    0%,
    50% {
      transform: translateX(-1px);
    }
    20%,
    70% {
      transform: translateX(1px);
    }
  }

  .flat {
    box-shadow: none;
  }
  .primary {
    background: #d91b42;
    color: white;
  }
  .secondary {
    background: #45c496;
    color: white;
  }
  .primary.inverse {
    color: #d91b42;
    background: white;
    border: 2px solid #d91b42;
  }
  .secondary.inverse {
    color: #45c496;
    background: white;
    border: 2px solid #45c496;
  }
</style>
