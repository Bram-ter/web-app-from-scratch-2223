/** Imports **/
import {TitleToJoke} from "./ui.js"
import {loadingState, startLoading} from "./states.js"

/** Change the quote by clicking on the button **/
function changeQuote() {
  const button = document.querySelector('button')

  button.addEventListener ('click', () => {
    loadingState()
    startLoading()
    TitleToJoke()
  })
}

export default changeQuote;