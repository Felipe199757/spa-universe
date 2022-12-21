import {Router} from "./js/router.js"
import events from "./js/events.js"

const event = events()
const router = new Router()

router.add("/","/pages/home.html")
router.add("/exploration", "/pages/exploration.html")
router.add("/universe", "/pages/universe.html")
router.add(404, "/pages/404.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

