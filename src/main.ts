// CMPM 121 Smelly Code Activity

// This variable keeps track of the counter
let counterValue = 0;

// These constants are for button IDs and heading text
const incrementID = "increment",
  counterID = "counter",
  headingText = "CMPM 121 Project";

function setup() {
  // Create the HTML for the counter
  document.body.innerHTML = `
    <h1>${headingText}</h1>
    <p>Counter: <span id="${counterID}">0</span></p>
    <button id="${incrementID}">Click Me!</button>
    <button id="dec">Decrement</button>
    <button id="reset">Reset</button>
  `;

  // Get the increment button element from the document
  const bI = document.getElementById(incrementID);
  // Get the decrement button element from the document
  const bD = document.getElementById("dec");
  // Get the reset button element from the document
  const bR = document.getElementById("reset");
  // Get the counter span element from the document
  const ctr = document.getElementById(counterID);

  // Check if any element is missing, then exit the function
  if (!bI || !bD || !bR || !ctr) return;

  // Add click event to the increment button
  bI.addEventListener("click", () => {
    // Increase the counter by 1
    counterValue++;
    // Update the counter display
    ctr.innerHTML = `${counterValue}`;
    // Update the document title
    document.title = "Clicked " + counterValue;
    // Change the background color based on even/odd count
    document.body.style.backgroundColor = counterValue % 2
      ? "pink"
      : "lightblue";
  });

  // Add click event to the decrement button
  bD.addEventListener("click", () => {
    // Decrease the counter by 1
    counterValue--;
    // Update the counter display
    ctr.innerHTML = `${counterValue}`;
    // Update the document title
    document.title = "Clicked " + counterValue;
    // Change the background color based on even/odd count
    document.body.style.backgroundColor = counterValue % 2
      ? "pink"
      : "lightblue";
  });

  // Add click event to the reset button
  bR.addEventListener("click", () => {
    // Reset the counter to 0
    counterValue = 0;
    // Update the counter display
    ctr.innerHTML = `${counterValue}`;
    // Update the document title
    document.title = "Clicked " + counterValue;
    // Change the background color based on even/odd count
    document.body.style.backgroundColor = counterValue % 2
      ? "pink"
      : "lightblue";
  });
}

function start() {
  // Call setup to initialize the UI
  setup();
}
// Start the counter app
start();
