<script>
  import { createEventDispatcher } from "svelte"
  import getRandomHexColor from "../helper/functions/getRandomHexColor"
  import percentTotal from "../helper/functions/percentTotal"
  import getEmoji from "../helper/functions/getEmoji"
  import Button from "../shared/Button.svelte"
  import Card from "../shared/Card.svelte"
  import { flip } from "svelte/animate"

  // Create an event dispatcher
  let dispatch = createEventDispatcher()

  // Function to send the ID of a selected poll
  const getId = (id) => dispatch("id", id)
  function getIdAndType(id, type) {
    dispatch("type", {id, type})
  }

  // Declare variables and states
  export let pollList = []
  let activeColor = "#23a523ba"
  $: localStorage.setItem("polls", JSON.stringify(pollList))

  let active = ""
  let percent = true

  let popular = 35 // Determines when the card becomes "popular"
</script>

<!-- Display checkbox for toggling percentage view -->
<div class="top">
  <label>
    <p>Show percentage</p>
    <input type="checkbox" bind:checked={percent} />
  </label>
</div>

<!-- Display the list of polls -->
<div class="polls">
  {#if pollList.length === 0}
    <p>No polls, go to "Add New Poll" to add one.</p>
  {:else}
    {#each pollList as poll, index (poll.id)}
      <div animate:flip={{ duration: 300 }}>
        <Card animate={true} border={poll.votesA + poll.votesB >= popular}>
          {#if poll.votesA + poll.votesB >= popular}
            <p class="pop">👑</p>
          {/if}
          <h1 class="poll-question">{poll.question}</h1>
          <div class="poll-answers">
            <!-- answerA -->
            <div
              style={`--color-active: ${activeColor}; --bg-color: ${poll.bg}`}
              class:active={active === `optionA ${index}`}
              class:border={poll.votesA + poll.votesB >= popular}
              on:click={() => {
                activeColor = getRandomHexColor()
                getIdAndType(poll.id, "votesA")
                active = `optionA ${index}`
                setTimeout(() => {
                  active = ""
                }, 500)
              }}
              on:keydown={(e) => {
                if (e.key === "Enter") {
                  poll.votesA += 1
                }
              }}
              role="button"
              tabindex="0"
              class="poll-answer"
              >
              <div
                style={`width: ${percentTotal(
                  poll.votesA,
                  poll.votesA + poll.votesB,
                  true,
                  )}; --bg-color: ${poll.bg}`}
                class="bar"
                />
                {poll.answers.answerA}
                <strong
                >{percent
                  ? percentTotal(poll.votesA, poll.votesA + poll.votesB, true)
                  : poll.votesA}</strong
              >
            </div>
            <!-- answerB -->
            <div
              style={`--color-active: ${activeColor}; --bg-color: ${poll.bg}`}
              class:active={active === `optionB ${index}`}
              class:border={poll.votesA + poll.votesB >= popular}
              on:click={() => {
                getIdAndType(poll.id, "votesB")
                activeColor = getRandomHexColor()
              
                active = `optionB ${index}`
                setTimeout(() => {
                  active = ""
                }, 500)
              }}
              on:keydown={(e) => {
                if (e.key === "Enter") {
                  poll.votesB += 1
                }
              }}
              role="button"
              tabindex="0"
              class="poll-answer"
            >
              <div
                style={`width: ${percentTotal(
                  poll.votesB,
                  poll.votesA + poll.votesB,
                  true,
                )}; --bg-color: ${poll.bg}`}
                class="bar"
              />
              {poll.answers.answerB}
              <strong
                >{percent
                  ? percentTotal(poll.votesB, poll.votesA + poll.votesB, true)
                  : poll.votesB}</strong
              >
            </div>
          </div>
          <div class="bottom">
            {#if poll.votesA + poll.votesB === 0}
              <p>No votes 😢</p>
            {:else}
              <p>
                Total: {poll.votesA + poll.votesB}
                {getEmoji(poll.votesA + poll.votesB)}
              </p>
            {/if}
            <Button on:click={() => getId(poll.id)}>X</Button>
          </div>
          {#if poll.createdAt}
            <p class="createdAt">Created at : {poll.createdAt}</p>
          {/if}
        </Card>
      </div>
    {/each}
  {/if}
</div>

<style>
  :root {
    --color-active: #23a523ba;
    --radius: 10.5px;

  }

  label {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .top {
    display: flex;
    justify-content: center;
  }

  .polls {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }

  .poll-question {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: #333;
  }

  .poll-answers {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    position: relative;
  }

  .poll-answer {
    font-size: 1rem;
    color: #555;
    border: 2px solid var(--bg-color);
    border-radius: 6px;
    padding: 0.5rem;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    transition: all 350ms ease-in-out;
    position: relative;
    overflow: hidden;
    width: 295px;
  }

  .bar {
    background-color: rgba(145, 123, 123, 0.561);
    background-color: var(--bg-color);
    border-right: 3px solid var(--color-active);
    border-radius: 0 var(--radius) var(--radius) 0;
    outline: var(--radius) solid var(--color-active);
    top: 0;
    left: 0;
    opacity: 0.35;
    height: 100%;
    position: absolute;
    transition: all 0.3s cubic-bezier(0.42, 0, 0.58, 1);
  }

  .poll-answer:hover {
    background-color: var(--color-active);
    color: white;
  }

  .active {
    background-color: var(--color-active);
    color: white;
    /* animation: pulse 1s ease-in-out infinite, active 0.55s ease-in-out; */
  }

  .bottom {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: 0.3rem;
  }

  @keyframes active {
    0%,
    100% {
      opacity: 0;
      transform: scale(1);
    }
    50% {
      opacity: 1;
      transform: scale(1.01);
      box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px,
        rgba(0, 0, 0, 0.24) 0px 1px 2px;
    }
  }

  .pop {
    text-align: center;
  }

  .border {
    border: 2px solid rgb(35, 38, 34);
  }

  .createdAt {
    font-size: 12px;
    font-style: italic;
    text-align: center;
  }
</style>
