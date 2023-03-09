import { printItems } from "./ui.js"

/* Routing */
function onRouteChange() {
  const hash = window.location.hash
  const routerView = document.getElementById("router-view")

  // If no hash is returned, default it back to the homepage
  if(window.location.hash == '' ){
    window.location.hash = '#home'
  }

  // Checks for a routerView on the page and returns an error if none is found
  if (!(routerView instanceof HTMLElement)) {
        throw new ReferenceError("No router view element available for rendering")
  }

  // If there is a ul on the page remove it upon switching hashes
  const searchUl = document.querySelector('ul');
  if (searchUl) {
    searchUl.remove();
  }

  switch (hash) {
      case "#home":
        fetch('views/home.html')
        .then((response) => response.text())
        .then(html => routerView.innerHTML = html)
        break;

       case "#search":
        fetch('views/search.html')
        .then((response) => response.text())
        .then(html => routerView.innerHTML = html)
        printItems()
        break;
   
       default:
        fetch('views/error.html')
        .then((response) => response.text())
        .then(html => routerView.innerHTML = html)
        break;
     }
}

window.addEventListener("hashchange", onRouteChange)

export default onRouteChange;