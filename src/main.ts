// CMPM 121 Smelly Code Activity

// This variable keeps track of the counter
let counterValue = 0;

// These constants are for button IDs and heading text
const incrementID = "increment",
  counterID = "counter",
  headingText = "CMPM 121 Project";

function setup() {
  // Create the HTML for the counter
  // document.body.innerHTML = `
  //   <h1>${headingText}</h1>
  //   <p>Counter: <span id="${counterID}">0</span></p>
  //   <button id="${incrementID}">Click Me!</button>
  //   <button id="dec">Decrement</button>
  //   <button id="reset">Reset</button>
  // `;
  createUI();

  // // Get the increment button element from the document
  // const incrementButton = document.getElementById(incrementID);
  // // Get the decrement button element from the document
  // const decrementButton = document.getElementById("dec");
  // // Get the reset button element from the document
  // const resetButton = document.getElementById("reset");
  // // Get the counter span element from the document
  // const counterSpan = document.getElementById(counterID);
  // Check if any element is missing, then exit the function
  // if (!incrementButton || !decrementButton || !resetButton || !counterSpan) return;
  const elements = getElements();
  if (
    !elements.incrementButton || !elements.decrementButton ||
    !elements.resetButton || !elements.counterSpan
  ) {
    console.error("Failed to find required elements");
    return;
  }

  // // Add click event to the increment button
  // incrementButton.addEventListener("click", () => {
  //   // Increase the counter by 1
  //   counterValue++;
  //   // Update the counter display
  //   counterSpan.innerHTML = `${counterValue}`;
  //   // Update the document title
  //   document.title = "Clicked " + counterValue;
  //   // Change the background color based on even/odd count
  //   document.body.style.backgroundColor = counterValue % 2
  //     ? "pink"
  //     : "lightblue";
  // });
  // // Add click event to the decrement button
  // decrementButton.addEventListener("click", () => {
  //   // Decrease the counter by 1
  //   counterValue--;
  //   // Update the counter display
  //   counterSpan.innerHTML = `${counterValue}`;
  //   // Update the document title
  //   document.title = "Clicked " + counterValue;
  //   // Change the background color based on even/odd count
  //   document.body.style.backgroundColor = counterValue % 2
  //     ? "pink"
  //     : "lightblue";
  // });
  // // Add click event to the reset button
  // resetButton.addEventListener("click", () => {
  //   // Reset the counter to 0
  //   counterValue = 0;
  //   // Update the counter display
  //   counterSpan.innerHTML = `${counterValue}`;
  //   // Update the document title
  //   document.title = "Clicked " + counterValue;
  //   // Change the background color based on even/odd count
  //   document.body.style.backgroundColor = counterValue % 2
  //     ? "pink"
  //     : "lightblue";
  // });
  bindEventListeners(elements);

  // update the UI
  updateUI();
}

function start() {
  // Call setup to initialize the UI
  setup();
}

// update ui function
function createUI() {
  document.body.innerHTML = `
    <h1>${headingText}</h1>
    <p>Counter: <span id="${counterID}"></span></p>
    <button id="${incrementID}">Click Me!</button>
    <button id="dec">Decrement</button>
    <button id="reset">Reset</button>
  `;
}

// get elements function
function getElements() {
  return {
    incrementButton: document.getElementById(incrementID),
    decrementButton: document.getElementById("dec"),
    resetButton: document.getElementById("reset"),
    counterSpan: document.getElementById(counterID),
  };
}

function bindEventListeners(elements: ReturnType<typeof getElements>) {
  const { incrementButton, decrementButton, resetButton } = elements;

  incrementButton?.addEventListener("click", () => {
    counterValue++;
    updateUI();
  });

  decrementButton?.addEventListener("click", () => {
    counterValue--;
    updateUI();
  });

  resetButton?.addEventListener("click", () => {
    counterValue = 0;
    updateUI();
  });
}

function updateUI() {
  const counterSpan = document.getElementById(counterID);
  if (!counterSpan) return;
  counterSpan.textContent = counterValue.toString();
  document.title = `Clicked ${counterValue}`;
  document.body.style.backgroundColor = counterValue % 2 === 0
    ? "lightblue"
    : "pink";
}

// Start the counter app
start();
