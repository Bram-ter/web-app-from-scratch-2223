import getData from "./api.js"
// import TitleToJoke from "./render.js"

const button = document.querySelector('button')
const dadJoke = document.querySelector('h1')

changeQuote()

/** Get two arrays with data and combine those **/
async function logData() {
  // Get arrays with 10 quotes two times from the api
  const quote1 = await getData()
  const quote2 = await getData()

  // Break apart both arrays and return them as a single one
  return [...quote1, ...quote2]
}

/** Randomizer array gotten from the api  **/
async function randomizeArray() {
  
  const combinedArray = await logData()

  // Random function https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  // const randomizer = Math.floor(Math.random()*combinedArray.length)
  const randomizer = combinedArray[Math.floor(combinedArray.length * Math.random())]

  // // Randomize array gotten from data
  const output = randomizer.joke

  console.log(output)

  return output
}

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
