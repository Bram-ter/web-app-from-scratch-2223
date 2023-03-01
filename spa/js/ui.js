import logData from "./data.js"

/** Randomizer array gotten from the api  **/
async function randomizeArray() {
  
    const combinedArray = await logData()
  
    // Random function https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    // const randomizer = Math.floor(Math.random()*combinedArray.length)
    const randomizer = combinedArray[Math.floor(combinedArray.length * Math.random())]
  
    // // Randomize array gotten from data
    const output = randomizer.joke
  
    console.log(output)
  
    return output
  }

export default randomizeArray;