// Variables
const title = document.querySelector('h1');
const paragraph = document.querySelector('article a');
const arm = document.querySelector('a');
const card = document.querySelector('main');

fetchData()

function fetchData() {
  const url = 'https://whois.fdnd.nl/api/v1/member?id=cldex5bay48b60auozge35rdb'
  
  const data = fetch(url)
    .then(response => response.json())
    .then(data => {
      changeH1(data)
    })
}

function changeH1(data) {
  console.log(data.member)
  const name = data.member.name
  const surname = data.member.surname
  const website = data.member.website

  title.innerHTML = name + ' ' + surname
  paragraph.href = website
}


arm.addEventListener ('click', () => {
  card.classList.toggle('moveUp')
})

