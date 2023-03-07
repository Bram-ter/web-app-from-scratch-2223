// import { TitleToJoke } from "./ui.js";
import { startLoading, disableElement } from "./states.js";
import { TitleToJoke } from "./ui.js";

export function changeQuote() {
  const container = document.querySelector('main'); // use a common parent element

  container.addEventListener('click', event => {
    const button = event.target.closest('button'); // get the closest button element

    if (button !== null) {
      startLoading()
      disableElement()

      setTimeout(() => {
        TitleToJoke()
      }, 1000);
    }
  });
}