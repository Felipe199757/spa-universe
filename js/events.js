import {
  body,
  buttonHome,
  buttonUniverse,
  buttonExploration
} from "./elements.js"

export default function events(){
  buttonHome.addEventListener("click", ()=>{
    body.classList.add("body-home")
    body.classList.remove("body-universe")
    body.classList.remove("body-exploration")
    buttonHome.classList.add("active")
    buttonExploration.classList.remove("active")
    buttonUniverse.classList.remove("active")
  })
  
  buttonExploration.addEventListener("click", ()=>{
    body.classList.add("body-exploration")
    body.classList.remove("body-home")
    body.classList.remove("body-universe")
    buttonExploration.classList.add("active")
    buttonHome.classList.remove("active")
    buttonUniverse.classList.remove("active")
  })
  
  buttonUniverse.addEventListener("click", ()=>{
    body.classList.add("body-universe")
    body.classList.remove("body-home")
    body.classList.remove("body-exploration")
    buttonUniverse.classList.add("active")
    buttonExploration.classList.remove("active")
    buttonHome.classList.remove("active")
  })
  
  
}