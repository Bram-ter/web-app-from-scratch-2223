import {TitleToJoke} from "./ui.js"

const button = document.querySelector('button')

/** Change the quote by clicking on the button **/
function changeQuote() {
  button.addEventListener ('click', () => {
    TitleToJoke()
  }, false)
}

export default changeQuote;