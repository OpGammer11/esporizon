export default function getRandomGreeting() {
  var greetings = ['Hello', 'Hi', 'Namaste'];

  var randomIndex = Math.floor(Math.random() * greetings.length);
  var randomGreeting = greetings[randomIndex];

  return randomGreeting;
}
