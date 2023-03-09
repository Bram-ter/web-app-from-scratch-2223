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

  const existingUl = document.querySelector('ul');
  if (existingUl) {
    existingUl.remove();
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