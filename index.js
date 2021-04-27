const pricePerKm = 0.21

let userAge = Number(prompt(`How old are you?`))
let userTravel = Number(prompt(`How far will you travel in km?`))

let ticketPrice = userTravel * pricePerKm

if (userAge < 18) {
   let juniorPrice = (80/100) * ticketPrice
   alert(`The cost will be £${juniorPrice.toFixed(2)}`)
}
else if (userAge >= 65) {
   let seniorPrice = (ticketPrice/100) * 40
   alert(`The cost will be £${seniorPrice.toFixed(2)}`)
}
else alert(`The cost will be £${ticketPrice.toFixed(2)}`)