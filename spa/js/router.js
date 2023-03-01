/* Change route to search page */
function onRouteChange() {
  const hash = window.location.hash
  const routerView = document.getElementById("router-view")

  if (!(routerView instanceof HTMLElement)) {
        throw new ReferenceError("No router view element available for rendering")
  }

  switch (hash) {
      case "#home":
        fetch('index.html')
        .then((response) => response.text())
        .then(html => routerView.innerHTML = html)
        break;

       case "#search":
        fetch('pages/search.html')
        .then((response) => response.text())
        .then(html => routerView.innerHTML = html)
        break;
   
      //  default:
      //    dadJoke.innerHTML = "<h1>Hmm... We can’t find that joke</h1>"
      //    break;
     }
}

window.addEventListener("hashchange", onRouteChange)

export default onRouteChange;