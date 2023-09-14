<script>
  import { format } from "date-fns"
  import { v4 as uuidv4 } from "uuid"
  import { fade } from "svelte/transition"
  import addRandom from "../helper/functions/addRandomPoll"
  import Button from "../shared/Button.svelte"
  import { createEventDispatcher } from "svelte"
  import getRandomHexColor from "../helper/functions/getRandomHexColor"

  let dispatch = createEventDispatcher()

  let done = false

  let fields = {
    question: "",
    answers: {
      answerA: "",
      answerB: "",
    },
  }
  let error = {
    question: false,
    answers: {
      answerA: false,
      answerB: false,
    },
  }
  let checkErrors = false

  $: number = 3

  let show = false

  function submitHandler() {
    done = false
    show = true
    error.question = fields.question.trim().length < 5 ? true : false
    error.answers.answerA = fields.answers.answerA.trim() === "" ? true : false
    error.answers.answerB = fields.answers.answerB.trim() === "" ? true : false
    checkErrors = Object.values(error.answers).some((el) => el === true)

    if (!error.question && !checkErrors) {
      let poll = {
        ...fields,
        votesA: 0,
        votesB: 0,
        createdAt: format(new Date(), "hh:mm:ss dd.MM.yyyy"),
        id: uuidv4(),
        bg: getRandomHexColor(),
      }

      dispatch("add", poll)
      fields = {
        question: "",
        answers: {
          answerA: "",
          answerB: "",
        },
      }
      done = true
      const timeout = setTimeout(() => {
        done = false
      }, 5000)
      const interval = setInterval(() => {
        number -= 1
      }, 650)
      return () => {
        clearInterval(interval)
        clearTimeout(timeout)
      }
    }
  }
</script>

<main>
  <form on:submit|preventDefault={submitHandler}>
    <div class="form-field">
      <label for="question">Poll Question:</label>
      <input type="text" id="question" bind:value={fields.question} />
      {#if error.question}
        <p class="error-message">Add question that has at least 5 characters</p>
      {/if}
      <label for="answer-a">Answer A:</label>
      <input type="text" id="answer-a" bind:value={fields.answers.answerA} />
      {#if error.answers.answerA}
        <p class="error-message">Add Answer A</p>
      {/if}
      <label for="answer-b">Answer B:</label>
      <input type="text" id="answer-b" bind:value={fields.answers.answerB} />
      {#if error.answers.answerB}
        <p class="error-message">Add Answer B</p>
      {/if}
    </div>
    <Button disabled={done}>Add Poll</Button>
  </form>
  <Button
    disabled={done}
    shake={true}
    type="secondary"
    inverse={true}
    on:click={() => (fields = addRandom())}>Add random</Button
  >
  {#if show && done}
    <div class="switching">
      <h1>Switching in {number}</h1>
    </div>
  {/if}

  {#if done}
    <h3 class="done" transition:fade={{ delay: 250, duration: 500 }}>
      Poll added
    </h3>
  {/if}
</main>

<style>
  :root {
    --primary: #1aac83;
    --error: #e7195a;
  }
  main {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  form {
    max-width: 400px;
    margin: 0 auto;
    text-align: center;
    margin-bottom: 1rem;
  }
  .form-field {
    margin: 18px auto;
  }
  input {
    width: 100%;
    height: 2.4rem;
    border-radius: 6px;
    border: 1px solid;
    padding: 0.5rem 0.7rem;
  }
  label {
    margin: 10px auto;
    text-align: left;
    display: block;
  }

  .done {
    background-color: var(--primary);
    color: white;
    padding: 1.2rem 1.3rem;
    border: 1px solid;
    width: 300px;
    border-radius: 6px;
    margin: 10px;

    opacity: 0.78;
  }

 @media only screen and (max-width: 600px) {
  form {
    width: 80%;
  }
}

</style>
