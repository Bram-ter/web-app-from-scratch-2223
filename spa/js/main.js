import randomizeArray from "./ui.js"
// import TitleToJoke from "./render.js"

const button = document.querySelector('button')
const dadJoke = document.querySelector('h1')

changeQuote()

/** Change the inner html of the h1 to a random value out of the array  **/
async function TitleToJoke(output) {
  // Change HTML element to the randomized array
  dadJoke.innerHTML = await randomizeArray(output)
}

/** Change the quote by clicking on the button **/
function changeQuote() {
  button.addEventListener ('click', () => {
    TitleToJoke()
  }, false)
}

/* Change route to search page */
function onRouteChange() {
  const hash = window.location.hash
  const routerView = document.getElementById("router-view")

  if (!(routerView instanceof HTMLElement)) {
        throw new ReferenceError("No router view element available for rendering")
  }

  switch (hash) {
      case "#home":
        fetch('index.html')
        .then((response) => response.text())
        .then(html => routerView.innerHTML = html)
        break;

       case "#search":
        fetch('pages/search.html')
        .then((response) => response.text())
        .then(html => routerView.innerHTML = html)
        break;
   
       default:
         dadJoke.innerHTML = "<h1>Hmm... We can’t find that joke</h1>"
         break;
     }
}

window.addEventListener("hashchange", onRouteChange)
