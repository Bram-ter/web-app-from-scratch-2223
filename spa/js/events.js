/** Imports **/
import {TitleToJoke} from "./ui.js"
import {loadingState, stopLoading} from "./states.js"

/** Change the quote by clicking on the button **/
function changeQuote() {
  const button = document.querySelector('button')

  button.addEventListener ('click', () => {
    loadingState()
    TitleToJoke()
    stopLoading()
  })
}

export default changeQuote;