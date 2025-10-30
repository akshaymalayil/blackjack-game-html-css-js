//1.  create two variables, firstCard & secondCard
let firstCard = 2
let secondCard = 11
let cards = [firstCard, secondCard]

let hasBlackJack = false
let isAlive = true
let sum = firstCard + secondCard
let message = ""
let drawCard = false

// store mesage-txt 
let messageTxt = document.getElementById("message-txt")


let cardEl = document.getElementById("card-el")
let cardSum = document.getElementById("card-sum")


function startGame()
{
    renderGame()
}
function renderGame()
{
    cardEl.textContent = "Cards: "+cards[0]+ " "+ cards[1]
    cardSum.innerText="Sum: "+sum

    if(sum < 21)
    {
        message = "do u want to draw a new card "
        drawCard = true
        
    }
    else if( sum === 21)
    {
        message = "wohoo! You've got Blackjack "
        hasBlackJack = true
    }
    else
    {
        message = "You've out of the game "
        isAlive = false
    }


    messageTxt.textContent = message
    // console.log()
}


function newCard()
{
    if(drawCard)
    {
        let thirdCard = 2
        let card3 = document.getElementById("card-3")

        card3.innerText = thirdCard

        sum = sum + thirdCard
        cardSum.innerText = sum

        if(sum >= 21)
            drawCard = false

    }
    else
    {
        alert("can't draw new card")
    }
    
}









// CASH OUT

    // 


