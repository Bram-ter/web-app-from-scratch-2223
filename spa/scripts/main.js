import { getData } from "./modules/api.js"
import { changeQuote } from "./modules/events.js"
import onRouteChange from "./modules/router.js"
import { parseSession } from "./modules/api.js"

getData()
parseSession()
changeQuote()
onRouteChange()