import { parseSession } from "./api.js";
import { stopLoading } from "./states.js";
  
 export function makeRandom() {
    // Return the data gotten from the sessionStorage
    const gottenArray = parseSession()

    // Random function https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    // const randomizer = Math.floor(Math.random()*combinedArray.length)

    // Get the array and randomize to get a random number (0 to the max length of the array)
    const randomizer = Math.floor(Math.random() * gottenArray.length);
  
    // Get the value returned by de randomizer variable and convert it to a JavaScript object
    const randomizeArray = gottenArray[randomizer.toString()];
  
    // Take the object and get the "joke" property
    const dadJoke = randomizeArray.joke
  
    console.log(dadJoke)
  
    return dadJoke
  }

  export async function TitleToJoke() {
    const heading = document.querySelector('h1')
    // Change the HTML element to the string value returned by the makeRandom function
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
  // Return the data gotten from the sessionStorage
  const gottenArray = parseSession()

  // Create a new ul element
  const ul = document.createElement('ul')

  // Map through the data gotten from the sessionStorage
  const mapJokes = gottenArray.map(item => {
    // For each joke in there create a 'li' element
    const li = document.createElement('li')
    // Set the innerText of the li to a joke
    li.innerText = item.joke;

    return li
  });

  // Append the contents of the mapJokes variable to the created ul 
  ul.append(...mapJokes);

  // Print the ul and all of it's children to the bottom of the body
  document.body.appendChild(ul);
}