/** Fetch data from the API **/
async function getData() {
  // API shizzle
  const options = { 
    method: 'GET',
    headers: { 'X-Api-Key': '52PGo1SLf0DTCOeeIwkOLA==vn2PBEcplAZg1IJJ'},
  }
  const url = 'https://api.api-ninjas.com/v1/dadjokes?limit=10'

  // Get API from url with API key
  const response = await fetch(url, options)
  // 
  return await response.json()
}

export default getData;
