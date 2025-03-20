// Declare a variable to hold the favorite number
let theFavNumber = 7; // You can set this to your actual favorite number

// Use a while loop to ask the user to guess the number
let guess; // Declare the guess variable
while (guess != theFavNumber) {
  guess = parseInt(prompt("Guess your favorite number:")); // Ask user for a guess

  // Check if the guess is too high, too low, or correct
  if (guess > theFavNumber) {
    console.log("Too high!");
  } else if (guess < theFavNumber) {
    console.log("Too low!");
  } else if (guess === theFavNumber) {
    console.log("Correct! You guessed your favorite number.");
  }
}
