const button = document.querySelector('button')
const dadJoke = document.querySelector('h1')
let data = '' 

combineData()

async function combineData() {
  console.log(await logData())
  changeQuote()
}

/** Get two arrays with data and combine those **/
async function logData() {
  // Get arrays with 10 quotes two times from the api
  const quote1 = await getData();
  const quote2 = await getData()

  // Break apart both arrays and return them as a single one
  return [...quote1, ...quote2]
}

/** Fetch data from the API **/
async function getData() {
  // API shizzle
  const options = { 
    method: 'GET',
    headers: { 'X-Api-Key': '52PGo1SLf0DTCOeeIwkOLA==vn2PBEcplAZg1IJJ'},
  }
  const url = 'https://api.api-ninjas.com/v1/dadjokes?limit=10'

  // Get API from url with API key
  const response = await fetch(url, options)
  // Return data as json
  data = await response.json()
  // 
  return data
}

/** Randomizer array gotten from the api  **/
function randomizeArray() {
  // console.log(data)
  // Random function https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  const randomizer = Math.floor(Math.random()*data.length)

  // Randomize array gotten from data
  const name = data[randomizer].joke

  return name
}

/** Change the inner html of the h1 to a random value out of the array  **/
function TitleToJoke(name) {
  // Change HTML element to the randomized array
  dadJoke.innerHTML = randomizeArray(name)
}

/** Change the quote by clicking on the button **/
function changeQuote() {
  button.addEventListener ('click', () => {
    TitleToJoke()
  })
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
