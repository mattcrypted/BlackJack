
let cards =[]
let sum = 0
let hasBlackJack =false
let isAlive = false
let message = ""
let getmessage = document.getElementById("message-el")
let getsum = document.getElementById("sum-el")
let getcards = document.getElementById("cards-el")

let player = {name:"Matthew",tips:145}
let getPlayer = document.getElementById("player-el")
getPlayer.textContent = player.name + ": $" + player.tips



function getRandomCard() {
  var num = Math.floor(Math.random() * 13) + 1
  if(num === 1){
    return 11
  }else if(num > 10){
    return 10
  }else{
    return num
  }
}

function startGame() {
isAlive = true
let firstcard = getRandomCard()
let secondcard = getRandomCard()
sum = firstcard + secondcard
cards = [firstcard,secondcard]

  renderGame()
}
  
function renderGame() {
        getsum.textContent="Sum: " + sum 
        getcards.textContent= "Cards: "
        for(i=0;i<cards.length;i++){
          getcards.textContent+= cards[i] + " "
        }
  if(sum <= 20) { 
        message = "Do you want to draw a new card?"
      } else if(sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack=true
      }else{
        message = "You're out of the game!"
        isAlive = false
      }
      getmessage.textContent=message 
}

function newCard() {
  if(isAlive===true && hasBlackJack===false){
    var thirdcard = getRandomCard()
sum += thirdcard
cards.push(thirdcard) 
getsum.textContent="Sum: " + sum
renderGame()
  }

}
  