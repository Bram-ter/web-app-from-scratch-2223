const button = document.querySelector('button')
const quote = document.querySelector('h1')

combineData()

async function combineData() {
  console.log(await logData())
}

async function logData() {
  // Get arrays with 10 quotes two times from the api
  const quote1 = await getData();
  const quote2 = await getData()

  // Break apart both arrays and return them as a single one
  return [...quote1, ...quote2]
}

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
  const data = await response.json()
  // 
  return data
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

function changeH1(data) {
  // Random function https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  const randomFunction = Math.floor(Math.random()*data.length)

  // Randomize array gotten from data
  const name = data[randomFunction].quote

  console.log(name)

  // Change HTML element to the randomized array
  quote.innerHTML = name
}

function loadQuote(data) {
  button.addEventListener ('click', () => {
    combineData(data)
  })
}
