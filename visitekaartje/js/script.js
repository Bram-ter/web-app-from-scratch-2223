const title = document.querySelector("h1");

// Create a request variable and assign a new XMLHttpRequest object to it.
let request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://cors-anywhere.herokuapp.com/https://whois.fdnd.nl/api/v1/members?first=200', true)
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

    // console.log(data.members[2].slug) // cldex5bay48b60auozge35rdb
    console.log(data.members[58])
    title.textContent = data.members[58].name + ' ' + data.members[58].surname;
}

// Send request
request.send()

