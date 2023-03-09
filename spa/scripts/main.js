import { getData } from "./modules/api.js"
import { changeQuote } from "./modules/events.js"
import onRouteChange from "./modules/router.js"
import { parseSession } from "./modules/ui.js"

getData()
parseSession()
changeQuote()
onRouteChange()