import navigationView from "../view/navigationView.js"


export const navigationMiddleware=(ctx,next)=>{
    navigationView()
next()
}