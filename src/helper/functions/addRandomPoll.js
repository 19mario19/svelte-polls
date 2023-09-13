export default function addRandom() {
  const polls = [
    {
      question: "Best Movie",
      answers: {
        answerA: "The Shawshank Redemption",
        answerB: "The Godfather",
      },
    },
    {
      question: "Favorite Food",
      answers: {
        answerA: "Pizza",
        answerB: "Sushi",
      },
    },
    {
      question: "Travel Destination",
      answers: {
        answerA: "Paris, France",
        answerB: "Bali, Indonesia",
      },
    },
    {
      question: "Hobby",
      answers: {
        answerA: "Reading",
        answerB: "Sports",
      },
    },
    {
      question: "Book Recommendation",
      answers: {
        answerA: "To Kill a Mockingbird",
        answerB: "1984",
      },
    },
    {
      question: "Music Genre",
      answers: {
        answerA: "Rock",
        answerB: "Hip Hop",
      },
    },
    {
      question: "Dream Vacation",
      answers: {
        answerA: "Beach Resort",
        answerB: "Mountain Cabin",
      },
    },
    {
      question: "Outdoor Activity",
      answers: {
        answerA: "Hiking",
        answerB: "Cycling",
      },
    },
    {
      question: "Favorite Color",
      answers: {
        answerA: "Blue",
        answerB: "Green",
      },
    },
    {
      question: "Animal Preference",
      answers: {
        answerA: "Dogs",
        answerB: "Cats",
      },
    },
    {
      question: "TV Show",
      answers: {
        answerA: "Friends",
        answerB: "Breaking Bad",
      },
    },
    {
      question: "Workout Routine",
      answers: {
        answerA: "Cardio",
        answerB: "Weightlifting",
      },
    },
    {
      question: "Cooking Recipe",
      answers: {
        answerA: "Pasta Carbonara",
        answerB: "Grilled Chicken",
      },
    },
    {
      question: "Technology Preference",
      answers: {
        answerA: "Apple",
        answerB: "Android",
      },
    },
    {
      question: "Historical Figure",
      answers: {
        answerA: "Albert Einstein",
        answerB: "Leonardo da Vinci",
      },
    },
    {
      question: "Superpower Choice",
      answers: {
        answerA: "Flight",
        answerB: "Invisibility",
      },
    },
    {
      question: "Car Brand",
      answers: {
        answerA: "Tesla",
        answerB: "Toyota",
      },
    },
    {
      question: "Celestial Object",
      answers: {
        answerA: "Moon",
        answerB: "Stars",
      },
    },
    {
      question: "Season of the Year",
      answers: {
        answerA: "Spring",
        answerB: "Fall",
      },
    },
    {
      question: "Weather Condition",
      answers: {
        answerA: "Sunny",
        answerB: "Rainy",
      },
    },
    {
      question: "Holiday Tradition",
      answers: {
        answerA: "Decorating the Tree",
        answerB: "Family Dinner",
      },
    },
    {
      question: "Board Game",
      answers: {
        answerA: "Monopoly",
        answerB: "Chess",
      },
    },
    {
      question: "Fictional Character",
      answers: {
        answerA: "Harry Potter",
        answerB: "Sherlock Holmes",
      },
    },
    {
      question: "Social Media Platform",
      answers: {
        answerA: "Instagram",
        answerB: "Twitter",
      },
    },
    {
      question: "Language to Learn",
      answers: {
        answerA: "Spanish",
        answerB: "French",
      },
    },
    {
      question: "Art Style",
      answers: {
        answerA: "Abstract",
        answerB: "Realism",
      },
    },
    {
      question: "Fashion Trend",
      answers: {
        answerA: "Vintage",
        answerB: "Minimalist",
      },
    },
    {
      question: "Gaming Console",
      answers: {
        answerA: "PlayStation",
        answerB: "Xbox",
      },
    },
    {
      question: "Exercise Routine",
      answers: {
        answerA: "Yoga",
        answerB: "Crossfit",
      },
    },
    {
      question: "What is Svelte?",
      answers: {
        answerA: "A JavaScript framework",
        answerB: "A JavaScript compiler",
      },
    },
    {
      question: "How does Svelte handle DOM updates?",
      answers: {
        answerA: "It uses a virtual DOM",
        answerB: "It compiles updates at build time",
      },
    },
    {
      question: "What is the Svelte store used for?",
      answers: {
        answerA: "Managing component state",
        answerB: "Handling API requests",
      },
    },
    {
      question: "Which syntax does Svelte use for component logic?",
      answers: {
        answerA: "JavaScript",
        answerB: "TypeScript",
      },
    },
    {
      question: "What is SvelteKit?",
      answers: {
        answerA: "A Svelte-based framework",
        answerB: "A CSS preprocessor",
      },
    },
    {
      question: "What are Svelte transitions used for?",
      answers: {
        answerA: "Animating element changes",
        answerB: "Managing server-side rendering",
      },
    },
    {
      question: "Which event handling approach does Svelte use?",
      answers: {
        answerA: "Declarative event listeners",
        answerB: "Imperative event binding",
      },
    },
    {
      question: "What is Svelte's philosophy regarding bundle size?",
      answers: {
        answerA: "It generates small bundle sizes",
        answerB: "It prioritizes large bundle sizes",
      },
    },
    {
      question: "What is Svelte's main advantage over other frameworks?",
      answers: {
        answerA: "Zero-runtime framework",
        answerB: "Complex runtime environment",
      },
    },
    {
      question: "How does Svelte handle reactivity?",
      answers: {
        answerA: "Through automatic reactivity",
        answerB: "Manually with setState",
      },
    },
  ]

  const randomIndex = Math.floor(Math.random() * polls.length)
  return polls[randomIndex]
}
