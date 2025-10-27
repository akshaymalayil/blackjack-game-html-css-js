//1.  create two variables, firstCard & secondCard
let firstCard = 11
let secondCard = 10
let hasBlackJack = false
let isAlive = true

document.getElementById("card-1").innerText=firstCard
document.getElementById("card-2").innerText=secondCard

// 2.var sum for sum of two cards
let sum = firstCard + secondCard

document.getElementById("card-sum").innerText=sum

if(sum < 21)
{
    console.log("do u want to draw a new card 🤔")
}
else if( sum === 21)
{
    console.log("wohoo! You've got Blackjack 🥳")
    hasBlackJack = true
}else
{
    console.log("You've out of the game 😭")
    isAlive = false
}


// CASH OUT
let cash = 0
if(hasBlackJack)
{
    console.log("got cashback")
}