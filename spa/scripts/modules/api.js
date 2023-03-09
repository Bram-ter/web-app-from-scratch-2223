/** Fetch data from the API **/
export async function getData() {
  // API shizzle
  const options = { 
    method: 'GET',
    headers: { 'X-Api-Key': '52PGo1SLf0DTCOeeIwkOLA==vn2PBEcplAZg1IJJ'},
  }
  const url = 'https://api.api-ninjas.com/v1/dadjokes?limit=10'

  // Fetch API from url with API key
  const response = await fetch(url, options)

  // Get response as json
  const data = await response.json();

  // Merge both arrays into one
  const combinedData = data.concat(data);

  // Stringify otherwise it gives back the objects.
  const stringifiedData = JSON.stringify(combinedData);
  
  // Set the item to the local storage
  sessionStorage.setItem('dadJokes', stringifiedData);
  
  console.log('Data stored in session storage successfully!');
  // return await response.json()
}

/** Randomizer array gotten from the api  **/
export function parseSession() {
  
  // Get the array from session storage
  const combinedArray = sessionStorage.getItem('dadJokes')

  // Parse the JSON string back into an JavaScript array
  const parseArray = JSON.parse(combinedArray);

  return parseArray
}
