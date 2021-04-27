// const pricePerKm = 0.21

// let userAge = Number(prompt(`How old are you?`))
// let userTravel = Number(prompt(`How far will you travel in km?`))

// let ticketPrice = userTravel * pricePerKm

// if (userAge < 18) {
//    let juniorPrice = (80/100) * ticketPrice
//    alert(`The cost will be £${juniorPrice.toFixed(2)}`)
// }
// else if (userAge >= 65) {
//    let seniorPrice = (60/100) * ticketPrice
//    alert(`The cost will be £${seniorPrice.toFixed(2)}`)
// }
// else alert(`The cost will be £${ticketPrice.toFixed(2)}`)


const pricePerKm = 0.21
let userAge = Number(prompt(`How old are you?`))
let userRoute = prompt(`Route:
LDNOX - London to  Oxford
LDNMAN - London to Manchester
OXMAN - Oxford to Manchester
OXLDN - Oxford to London
MANOX - Manchester to Oxford
MANLDN - Manchester to London`)

let userDistance = null

const LDNOX = 550
const OXLDN = 550
const OXMAN = 800
const MANOX = 800
const LDNMAN = 900
const MANLDN = 900

if (userRoute === `LDNOX`) {
   userDistance = LDNOX
} else
if (userRoute === `OXLDN`) {
   userDistance = OXLDN
} else
if (userRoute === `OXMAN`) {
   userDistance = OXMAN
} else
if (userRoute === `MANOX`) {
   userDistance = MANOX
} else
if (userRoute === `LDNMAN`) {
   userDistance = LDNMAN
} else
if (userRoute === `MANLDN`) {
   userDistance = MANLDN
}


let ticketPrice = userDistance * pricePerKm

if (userAge < 18) {
   let juniorPrice = (80/100) * ticketPrice
   alert(`The cost will be £${juniorPrice.toFixed(2)}`)
}
else if (userAge >= 65) {
   let seniorPrice = (60/100) * ticketPrice
   alert(`The cost will be £${seniorPrice.toFixed(2)}`)
}
else alert(`The cost will be £${ticketPrice.toFixed(2)}`)
