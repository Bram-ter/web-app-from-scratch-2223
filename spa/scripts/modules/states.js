/** Different states **/
export function startLoading() {
  const heading = document.querySelector('h1')

  heading.innerHTML = "A bad joke is on it's way!"
  heading.classList.toggle("disabled")
}

export function disableElement() {
  const button = document.querySelector('button')

  button.setAttribute("disabled", true)
  button.innerHTML = 'Loading bad joke' 
}

export function stopLoading() {
  const button = document.querySelector('button')
  const heading = document.querySelector('h1')

  button.removeAttribute("disabled")
  button.innerHTML = 'Get a bad joke!' 
  heading.classList.toggle("disabled")
}