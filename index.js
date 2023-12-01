
let deck = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""


// let player1 = {
//     name: "Per",
//     chips: 145,
//     sayHello: function() {
//         console.log("Heisann!")
//     }

// }

// player1.sayHello()

// player.textContent = player1.name + ": $" + player1.chips



function getRandomCard(){

    let rando =  Math.floor(Math.random() * 13) + 1
    if (rando > 10 ){
        return 10
    } else if (rando === 1){
        return 11
    } else {
        return rando 
    }
    
}


function startGame(){

    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = Math.floor(Math.random() * (12 - 1) + 1)
    deck = [firstCard, secondCard]
    sum = firstCard + secondCard
    sums.textContent = "Sum: " + sum


    renderGame()
}

function renderGame(){



    cards.textContent = "Cards: " 
    for (let i = 0; i < deck.length; i++){
        cards.textContent += deck[i] + ", "
    }
        
        if (sum < 21) { 
            message = "Do you want to draw a new card?"
        } else if (sum === 21) {
            message = "Wohoo! You've got Blackjack!"
            hasBlackJack = true
        } else {
            message = "You're out of the game! :("
            isAlive = false
        }
        
messageR.textContent = message

console.log(isAlive)
}


function newCard(){

    if (isAlive === true && hasBlackJack === false) {
        let addCard = Math.floor(Math.random() * (11-2 +1) + 2)
        messageR.textContent = "Drawing a new card from the deck"
        sum += addCard
        deck.push(addCard)
        sums.textContent = "Sum: " + sum
        cards.textContent += ", " + addCard
        renderGame()
    }

}

