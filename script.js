
let cards = []
let sum = 0

let gameStart = false
let hasBlackJack = false
let isAlive = false

let message = ""


// store mesage-txt 
let messageTxt = document.getElementById("message-txt")


let cardEl = document.getElementById("card-el")
let cardSum = document.getElementById("card-sum")



// player-prize

let player =
{
    name : "Akshay",
    prize: 160
};

let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name+": $"+player.prize






// function to get random card
function getRandomCard()
{
    let random = Math.floor(Math.random()*13) + 1

    if(random === 1)
        return 11
    else if(random > 10 )
        return 10

    return random
}



function startGame()
{
    gameStart = true
    isAlive = true


    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    sum = firstCard + secondCard

    cards = [firstCard, secondCard]

    renderGame()
}


function renderGame()
{
    // cardEl.textContent = "Cards: "+cards[0]+ " "+ cards[1]

    cardEl.textContent = "Cards: "
    for(let i = 0; i < cards.length; i++)
    {
        cardEl.textContent = cardEl.textContent + cards[i] + " "

    }
    

    cardSum.innerText="Sum: "+sum

    if(sum < 21)
    {
        message = "do u want to draw a new card "
       
        
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
    if(gameStart)
    {
            if(isAlive && !hasBlackJack)
            {
                let newCard = getRandomCard()
                cards.push(newCard)

                sum = sum + newCard

                renderGame()
            }
            else
            {
                alert("you're out of the game")
            }
    }
    else
        alert("Cant draw card before starting the game.")

    
}


