import logData from "./data.js"

/** Change the inner html of the h1 to a random value out of the array  **/
export async function TitleToJoke(output) {
    const dadJoke = document.querySelector('h1')
    // Change HTML element to the randomized array
    dadJoke.innerHTML = await randomizeArray(output)
}

/** Randomizer array gotten from the api  **/
export async function randomizeArray() {
  
    const combinedArray = await logData()
  
    // Random function https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    // const randomizer = Math.floor(Math.random()*combinedArray.length)
    const randomizer = combinedArray[Math.floor(combinedArray.length * Math.random())]
  
    // // Randomize array gotten from data
    const output = randomizer.joke
  
    console.log(output)
  
    return output
  }