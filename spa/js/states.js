/** Different states **/
export function loadingState() {
  const button = document.querySelector('button')

  button.setAttribute("disabled", true)
  button.innerHTML = 'Loading bad joke' 
}

export function stopLoading() {
  const button = document.querySelector('button')

  setTimeout(() => {
    button.removeAttribute("disabled")
    button.innerHTML = 'Get a bad joke!' 
  }, 1000)
}