import getData from "./api.js"
import { changeQuote } from "./events.js"
import onRouteChange from "./router.js"
import { parseSession } from "./ui.js"

getData()
parseSession()
changeQuote()
onRouteChange()