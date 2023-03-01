/** Imports **/
import getData from "./api.js"

/** Get two arrays with data and combine those **/
async function logData() {
  // Get arrays with 10 quotes two times from the api
  const quote1 = await getData()
  const quote2 = await getData()

  // Break apart both arrays and return them as a single one
  return [...quote1, ...quote2]
}

export default logData;