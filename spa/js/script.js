const button = document.querySelector('button')
const quote = document.querySelector('h1')

fetchData()

function fetchData() {
  
  const url = 'https://quote.api.fdnd.nl/v1/quote/'
  
  const data = fetch(url)
    .then(response => response.json())
    .then(data => {
      button.addEventListener ('click', () => {
        getQuote(data)
      })
    })
}

function getQuote(data) {
  const name = data.data[1].text

  quote.innerHTML = name
}
