import { writable } from "svelte/store";

const pollsFromLocalStorage = JSON.parse(localStorage.getItem("polls"))

const polls = writable(pollsFromLocalStorage || [])

export default polls