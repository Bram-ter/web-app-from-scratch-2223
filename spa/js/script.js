const button = document.querySelector('button')
const quote = document.querySelector('h1')
let data = '' 

combineData()

async function combineData() {
  console.log(await logData())
  loadQuote()
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
  const url = 'https://api.api-ninjas.com/v1/quotes?limit=10'

  // Get API from url with API key
  const response = await fetch(url, options)
  // Return data as json
  data = await response.json()
  // 
  return data
}

/** Change the inner html of the h1 to a random value out of the array  **/
function changeH1() {
  console.log(data)
  // Random function https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  const randomizer = Math.floor(Math.random()*data.length)

  // Randomize array gotten from data
  const name = data[randomizer].quote

  // Change HTML element to the randomized array
  quote.innerHTML = name
}

/** Load the quote by clicking on the button **/
function loadQuote(data) {
  button.addEventListener ('click', () => {
    changeH1(data)
  })
}

// fetchData()

// function fetchData() {

//   const options = { 
//     method: 'GET',
//     headers: { 'X-Api-Key': '52PGo1SLf0DTCOeeIwkOLA==vn2PBEcplAZg1IJJ'},
//   }
//   const url = 'https://api.api-ninjas.com/v1/quotes?limit=10'
  
//   fetch(url, options).then(response => response.json())
//               .then(data => {
//                 console.log(data)
//                 test(data)
//   })
// }
