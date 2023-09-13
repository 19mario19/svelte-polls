<script>
  import arMA from "date-fns/locale/ar-MA"
  import { createEventDispatcher } from "svelte"
  let dispatch = createEventDispatcher()
  let x = 0
  let y = 0
  function coordonates(e) {
    dispatch("coorodantes", { x, y })
    x = e.clientX
    y = e.clientY
  }
  let coordinateArray = [];


  // create an array that contains the last three positions 

  let array = new Array(3)
  array[0] = 1
  array[1] = 1
  array[2] = 1
  array[3] = 1
  array[4] = 1
  
  $: console.log(array)

</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="mouse" on:mousemove={(e) => coordonates(e)} />

<style>
  .mouse {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    position: absolute;
    z-index: 0;
    transition: all 200ms ease;
    cursor: none;
  }
</style>
