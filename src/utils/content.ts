import { FORM_VALUE_KEY, DEFAULT_FORM_VALUES, FILL_FORM_EVENT } from './../constants/global';
import { Signup } from './Signup';

const OPACITY_REGULAR = '0.6';
const OPACITY_OVER = '0.8';
const OPACITY_CLICK = '1';

const formLocalStorage = await chrome.storage.local.get(FORM_VALUE_KEY);
let form = JSON.parse(formLocalStorage[FORM_VALUE_KEY]) || DEFAULT_FORM_VALUES;

chrome.runtime.onMessage.addListener((message) => {
  if (message.type === FILL_FORM_EVENT) {
    form = message?.data;
  }
});

// Create a button element
let button = document.createElement('button');

// Set the button's position to absolute
button.style.position = 'absolute';
button.style.top = '0';

// Set the button's left and right positions to be half the width of the screen
button.style.right = '58%';

// Set the button's initial position to be off the screen
button.style.transform = 'translateY(-100%)';

// Set the button's text
button.innerHTML = 'Lugister';

// Set the button's design using CSS
button.style.color = '#fff';
button.style.backgroundColor = '#600dff';
button.style.border = 'none';
button.style.padding = '6px 20px';
button.style.opacity = OPACITY_REGULAR;
button.style.borderBottomLeftRadius = '50px';
button.style.borderBottomRightRadius = '50px';
button.style.fontWeight = '600';
button.style.cursor = 'pointer';

// Add an animation effect using CSS
button.style.transition = 'all 0.3s ease-in-out';

// Listen for the window's load event
window.addEventListener('load', function () {
  // When the page finishes loading, animate the button moving down onto the screen
  button.style.transform = 'translateY(0)';
});

// Listen for a mouseover event on the button
button.addEventListener('mouseover', function () {
  // When the mouse is over the button, change its design
  button.style.opacity = OPACITY_OVER;
});

// Listen for a mouseout event on the button
button.addEventListener('mouseout', function () {
  // When the mouse leaves the button, restore its original design
  button.style.opacity = OPACITY_REGULAR;
});

// Listen for a mouseout event on the button
button.addEventListener('mousedown', function () {
  // When the mouse leaves the button, restore its original design
  button.style.opacity = OPACITY_CLICK;
});

// Listen for a mouseout event on the button
button.addEventListener('mouseup', function () {
  // When the mouse leaves the button, restore its original design
  button.style.opacity = OPACITY_OVER;
});

button.addEventListener('click', function () {
  chrome.storage.sync.get(FORM_VALUE_KEY, () => {
    const signup = new Signup(form);
    signup.start();
  });
});

// Inject the button into the DOM
document.body.appendChild(button);
