import { stopLoading } from "./states.js";

/** Randomizer array gotten from the api  **/
 export function parseSession() {
  
    // Get the array from session storage
    const combinedArray = sessionStorage.getItem('dadJokes')
  
    // Parse the JSON string back into an JavaScript array
    const parseArray = JSON.parse(combinedArray);
  
    return parseArray
  }
  
 export function makeRandom() {
    const gottenArray = parseSession()
    // Random function https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    // const randomizer = Math.floor(Math.random()*combinedArray.length)

    // Get the array and randomize it into a number
    const randomizer = Math.floor(Math.random() * gottenArray.length);
  
    // Get that number and get the object
    const randomizeArray = gottenArray[randomizer.toString()];
  
    // Take the object and get the key value
    const dadJoke = randomizeArray.joke
  
    console.log(dadJoke)
  
    return dadJoke
  }

  export async function TitleToJoke() {
    const heading = document.querySelector('h1')
    // Change HTML element to the randomized array
    heading.innerHTML = makeRandom()
    stopLoading()
}

// export function searchInput() {
//   const gottenArray = parseSession()
//   const searchJoke = document.getElementById("search").value;

//   const index = gottenArray.findIndex(obj => obj.joke === searchJoke);

//   if (index !== -1) {
//   console.log(`Found joke at index ${index}`);
//   } else {
//   console.log(`Joke not found in array`);
//   }
// }

// export function printItems() {
//   const gottenArray = parseSession()
//   const ul = document.createElement('ul');

//   gottenArray.forEach(joke => {
//     const li = document.createElement('li');
//     li.innerText = joke.joke;
//     ul.appendChild(li);
//   });

//   document.body.appendChild(ul);
// }

export function printItems() {
  const gottenArray = parseSession()
  const ul = document.createElement('ul')

  const liArray = gottenArray.map(joke => {
    const li = document.createElement('li')
    li.innerText = joke.joke;
    return li
  });

  ul.append(...liArray);

  document.body.appendChild(ul);
}