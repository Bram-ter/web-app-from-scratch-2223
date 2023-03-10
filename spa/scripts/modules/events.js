import { startLoading, disableElement } from "./states.js";
import { TitleToJoke } from "./ui.js";

export function changeQuote() {
  // Use a common parent element
  const container = document.querySelector('main');

  container.addEventListener('click', event => {
    // Get the closest button element
    const button = event.target.closest('button');

    // Check if button exists
    if (button !== null) {
      startLoading()
      disableElement()

      setTimeout(() => {
        TitleToJoke()
      }, 1000);
    }
  });
}