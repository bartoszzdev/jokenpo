const cards = document.querySelectorAll('.img-card')
let myCard
let opponentCard
let winScore = 0
let loseScore = 0
let drawScore = 0

cards.forEach(card => {
    card.addEventListener('click', (e) => {
        myCard = e.target.src
        startGame(myCard)
        checkWinner()
    })
})

function startGame(cardChosen) {
    const player1 = document.querySelector('.player1-card')
    const player2 = document.querySelector('.player2-card')
    const randomCard = Math.floor(Math.random() * cards.length)
    opponentCard = cards[randomCard].src

    player1.innerHTML = `<img src='${cardChosen}' style='width: 50%'>`
    player2.innerHTML = `<img src='${opponentCard}' style='width: 50%'>`
}

function checkWinner() {
    const displayMessage = document.querySelector('.message')
    const wins = document.querySelector('.wins')
    const loses = document.querySelector('.loses')
    const draws = document.querySelector('.draws')

    if (myCard == cards[0].src) {   //Caso tenha escolhido pedra:
        switch (opponentCard) {
            case cards[1].src:  //Caso o computador seja papel
                loseScore += 1
                loses.textContent = loseScore 
                displayMessage.textContent = 'Você perdeu!'
                break
            case cards[2].src:  //Caso o computador seja tesoura
                winScore += 1
                wins.textContent = winScore 
                displayMessage.textContent = 'Você venceu!'
                break
            default:  //Caso o computador seja o mesmo escolhido por você
                drawScore += 1
                draws.textContent = drawScore 
                displayMessage.textContent = 'Empatou!'
        }
    } else if (myCard == cards[1].src) {   //Caso tenha escolhido papel:
        switch (opponentCard) {
            case cards[2].src:  //Caso o computador seja tesoura
                loseScore += 1
                loses.textContent = loseScore 
                displayMessage.textContent = 'Você perdeu!'
                break
            case cards[0].src:  //Caso o computador seja pedra
                winScore += 1
                wins.textContent = winScore 
                displayMessage.textContent = 'Você venceu!'
                break
            default:  //Caso o computador seja o mesmo escolhido por você
                drawScore += 1
                draws.textContent = drawScore 
                displayMessage.textContent = 'Empatou!'
        }
    } else if (myCard == cards[2].src) {   //Caso tenha escolhido tesoura:
        switch (opponentCard) {
            case cards[0].src:  //Caso o computador seja pedra
                loseScore += 1
                loses.textContent = loseScore 
                displayMessage.textContent = 'Você perdeu!'
                break
            case cards[1].src:  //Caso o computador seja papel
                winScore += 1
                wins.textContent = winScore 
                displayMessage.textContent = 'Você venceu!'
                break
            default:  //Caso o computador seja o mesmo escolhido por você
                drawScore += 1
                draws.textContent = drawScore 
                displayMessage.textContent = 'Empatou!'
        }
    }
}