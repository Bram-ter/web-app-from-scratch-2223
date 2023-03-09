import { printItems } from "./ui.js"

/* Routing */
function onRouteChange() {
  const hash = window.location.hash
  const routerView = document.getElementById("router-view")
  const heading = document.querySelector('h1')

  if(window.location.hash == '' ){
    window.location.hash = '#home'
  }

  if (!(routerView instanceof HTMLElement)) {
        throw new ReferenceError("No router view element available for rendering")
  }

  switch (hash) {
      case "#home":
        fetch('pages/home.html')
        .then((response) => response.text())
        .then(html => routerView.innerHTML = html)
        break;

       case "#search":
        fetch('pages/search.html')
        .then((response) => response.text())
        .then(html => routerView.innerHTML = html)
        printItems()
        break;
   
       default:
        fetch('pages/error.html')
        .then((response) => response.text())
        .then(html => routerView.innerHTML = html)
        break;
     }
}

window.addEventListener("hashchange", onRouteChange)

export default onRouteChange;