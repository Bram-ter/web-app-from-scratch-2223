const button = document.querySelector('button')
const quote = document.querySelector('h1')

fetchData()

function fetchData() {
  
  const url = 'https://quote.api.fdnd.nl/v1/quote/'
  
  const data = fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data.data)
      button.addEventListener ('click', () => {
        getQuote(data)
      })
    })
}

function getQuote(data) {
  const name = data.data[Math.floor(Math.random()*data.data.length)].text

  console.log(name)

  quote.innerHTML = name
}
