<!-- MainLoading.svelte -->
<script>
  import { onMount } from "svelte"
  import getRandomHexColor from "../helper/functions/getRandomHexColor"

  /**
   * MainLoading component displays a loading animation with customizable options.
   * @module MainLoading
   * @param {string} bgColor - The background color of the loading animation.
   * @param {number} speed - The animation duration in milliseconds.
   * @param {number} borderRadius - The border radius of the loading animation.
   * @param {number} borderSize - The border size of the loading animation.
   * @param {string} borderStyle - The border style of the loading animation.
   * @param {string} borderColor - The border color of the loading animation.
   * @param {number} howManyCards - The number of animated cards.
   * @param {number} delayCard - The delay between each animated card.
   * @param {string} color - The color of the text and border.
   * @param {boolean} randomBorderColor - Whether to use a random border color.
   */

  // Animation Configuration
  export let bgColor = "#fff"
  export let color = "#000"
  export let speed = 8000
  export let borderRadius = Math.floor(Math.random() * 100)
  export let borderSize = 5
  export let borderStyle = "solid"
  export let borderColor = "#000"
  export let howManyCards = 8
  export let delayCard = 0.2
  export let randomBorderColor = true
  export let randomBorderStyle = true

  // Generate random border color
  function generateRandomBorderColor() {
    borderColor = getRandomHexColor()
  }

  // Generate Card Data
  function generateCardData(cardCount, delayIncrement = 0.2) {
    let cardData = []
    for (let index = 0; index < cardCount; index++) {
      const cardName = `card-${index}`
      cardData.push({
        id: index,
        name: cardName,
        delay: (index * delayIncrement).toFixed(2),
        bgColor: getRandomHexColor(),
      })
    }
    return cardData
  }

  let cards = generateCardData(howManyCards, delayCard)

  // Dynamic Styles
  let borderRadiusStyle = `${borderRadius}px`
  let borderSizeStyle = `${borderSize}px`
  let animationDuration = `${speed}ms`
  let inlineStyles = `color: ${color};
    background-color: ${bgColor};
    --animation-duration: ${animationDuration};`

  onMount(() => {
    let borderStyles = ["solid", "dashed", "dotted", "double"]
    if (randomBorderColor) {
      generateRandomBorderColor()
    }
    if (randomBorderStyle) {
      borderStyle =
        borderStyles[Math.floor(Math.random() * borderStyles.length)]
    }
  })
</script>

<div style={inlineStyles} class="bg">
  <!-- Loading Animation Center -->
  <div
    class="animate-loading element center"
    style={`border-radius: ${borderRadiusStyle};`}
  >
    <h1 class="loader">Loading...</h1>
  </div>

  <!-- Animated Cards -->
  {#each cards as card (card.id)}
    <div
      class={`animate-loading ${card.name} element`}
      style={`animation-delay: ${card.delay}s ;
       background-color: ${card.bgColor};
       border-radius: ${borderRadiusStyle};
       border: ${borderSizeStyle} ${borderStyle} ${borderColor};
       `}
    />
  {/each}
</div>

<style>
  :root {
    --animation-duration: 8000ms;
  }
  .bg {
    height: 100vh;
    width: 100vw;
    position: relative;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    z-index: 99;
  }

  .loader {
    z-index: 96;
    opacity: 0.9;
    font-size: 12px;
  }

  .animate-loading {
    animation: loading-7 var(--animation-duration) ease-in-out infinite both;
  }

  .element {
    height: 200px;
    width: 200px;
    z-index: 95;
    position: absolute;
    border-radius: 50px;
    border: 5px solid;
    align-items: center;
    justify-content: center;
    display: flex;
  }

  /* original */
  @keyframes loading-0 {
    0% {
      transform: rotate(0deg) scale(1) translateX(-50%);
      opacity: 1;
    }

    50% {
      transform: rotate(180deg) scale(1.2) translateX(50%);
      opacity: 0.6;
    }

    100% {
      transform: rotate(360deg) scale(1) translateX(-50%);
      opacity: 1;
    }
  }
  /* v2 */
  @keyframes loading-1 {
    0%,
    100% {
      transform: translateX(0);
      opacity: 1;
    }
    20%,
    80% {
      transform: translateX(100px);
      opacity: 0.6;
    }
    40%,
    60% {
      transform: translateX(-100px);
      opacity: 0.8;
    }
  }
  /* v3 */
  @keyframes loading-2 {
    0%,
    100% {
      transform: translateY(0);
      opacity: 1;
    }
    10%,
    90% {
      transform: translateY(-100px) scaleY(1.2);
      opacity: 0.6;
    }
    20%,
    80% {
      transform: translateY(100px) scaleY(0.8);
      opacity: 0.8;
    }
  }
  /* v4 fliker*/
  @keyframes loading-3 {
    0%,
    100% {
      transform: scale(1);
      opacity: 1;
    }
    10%,
    90% {
      transform: scale(1.2);
      opacity: 0.6;
    }
    20%,
    80% {
      transform: scale(0.8);
      opacity: 0.8;
    }
  }

  /* v5 rotation*/
  @keyframes loading-4 {
    0%,
    100% {
      transform: rotate(0deg) scale(1);
      border-radius: 50%;
      opacity: 1;
    }
    25%,
    75% {
      transform: rotate(360deg) scale(1.2);
      border-radius: 5%;
      opacity: 0.6;
    }
    50% {
      transform: rotate(180deg) scale(1);
      border-radius: 10%;
      opacity: 0.8;
    }
  }

  /* v6 zoom-in and out */

  @keyframes loading-5 {
    0%,
    100% {
      transform: scale(1);
      opacity: 1;
    }
    25%,
    75% {
      transform: scale(0.6);
      opacity: 0.6;
    }
    50% {
      transform: scaleY(1.2);
      opacity: 0.8;
    }
  }

  /* complex */
  @keyframes loading-6 {
    0%,
    100% {
      transform: translateY(0);
      opacity: 1;
    }
    5%,
    95% {
      transform: translateY(-20px);
      opacity: 0.6;
    }
    10%,
    90% {
      transform: translateY(40px);
      opacity: 0.8;
    }
    15%,
    85% {
      transform: translateY(-60px);
      opacity: 0.7;
    }
    20%,
    80% {
      transform: translateY(80px);
      opacity: 0.6;
    }
    25%,
    75% {
      transform: translateY(-100px);
      opacity: 0.5;
    }
    30%,
    70% {
      transform: translateY(120px);
      opacity: 0.4;
    }
    35%,
    65% {
      transform: translateY(-140px);
      opacity: 0.3;
    }
    40%,
    60% {
      transform: translateY(160px);
      opacity: 0.2;
    }
    45%,
    55% {
      transform: translateY(-180px);
      opacity: 0.1;
    }
    50% {
      transform: translateY(200px);
      opacity: 0;
    }
  }

  @keyframes loading-7 {
    0%,
    100% {
      transform: translateY(0);
      opacity: 0.1;
      z-index: -100;
      filter: blur(5px);
    }
    5%,
    95% {
      transform: translateY(-100px) translateX(100px);
      opacity: 0.6;
      filter: blur(15px);
    }
    10%,
    90% {
      transform: translateY(-20px);
    }
    15%,
    85% {
      transform: translateY(-30px);
      filter: blur(2px);
    }
    20%,
    80% {
      transform: translateY(-40px);
      opacity: 0.6;
      filter: blur(1px);
    }
    25%,
    75% {
      filter: blur(0px);
      transform: translateY(-5px) translateX(50px);
      opacity: 0.5;
      z-index: 95;
      box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
        rgba(0, 0, 0, 0.22) 0px 15px 12px;
    }
    30%,
    70% {
      transform: translateY(-40px);
      opacity: 0.4;
    }
    35%,
    65% {
      transform: translateY(-30px);
      opacity: 0.3;
    }
    40%,
    60% {
      transform: translateY(-20px);
      opacity: 0.2;
    }
    45%,
    55% {
      transform: translateY(-10px) translateX(-100px);
      opacity: 0.1;
    }
    50% {
      transform: translateY(0);
      opacity: 0;
    }
  }
</style>
