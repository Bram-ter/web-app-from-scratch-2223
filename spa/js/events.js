/** Imports **/
import {TitleToJoke} from "./ui.js"

/** Change the quote by clicking on the button **/
function changeQuote() {
  const button = document.querySelector('button')

  button.addEventListener ('click', () => {
    TitleToJoke()
  }, false)
}

export default changeQuote;