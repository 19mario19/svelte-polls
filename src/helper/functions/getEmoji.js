export default function getEmoji(num) {
  if (num === 1) {
    return "😢"
  } else if (num <= 5) {
    return "😔"
  } else if (num <= 10) {
    return "😐"
  } else if (num < 20) {
    return "🙂"
  } else  {
    return "😄"
  }
}
