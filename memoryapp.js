document.addEventListener("DOMContentLoaded", function(){
const cards = document.querySelectorAll(".memory-card");

(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 20);
        card.style.order = randomPos;
    })
})();
// let cardsArray = Array.from(cards);

// function shuffle(array) {
//     let counter = array.length;

//     while (counter > 0) {
//         let index = Math.floor(Math.random() * counter);
//         counter --;
//         let temp = array[counter];
//         array[counter] = array[index];
//         array[index] = temp;
//     }
//     return array;
// }

// let shuffledCards = shuffle(cardsArray);
cards.forEach(card => card.addEventListener("click", cardFlipped))

let hasFlipped = null;
let firstCard;
let secondCard;
let isProcessing = false;

function cardFlipped (event){
    if (isProcessing) {return;}
    if (event.target.classList.contains("flip")) {return;}
    else {
        event.target.classList.add("flip");
    }
    if (hasFlipped === null) {
        hasFlipped = event.target.parentElement;
        console.log("event", event);
        console.log("target", event.target);
        console.log("hasFlipped", hasFlipped);
        return;
    }
    else {
        firstCard = hasFlipped;
        secondCard = event.target.parentElement;
    }
    if (firstCard.firstElementChild.firstElementChild.dataset.animal === secondCard.firstElementChild.firstElementChild.dataset.animal) {
        isProcessing = true;
        firstCard.removeEventListener("click", cardFlipped);
        secondCard.removeEventListener("click", cardFlipped);
        firstCard = null;
        secondCard = null;
        hasFlipped = null;
        isProcessing = false;
    }
    else {
        isProcessing = true;
        setTimeout(function() {
            firstCard.firstElementChild.classList.remove("flip");
            secondCard.firstElementChild.classList.remove("flip");
            firstCard = null;
            secondCard = null;
            hasFlipped = null;
            isProcessing = false;
        }, 1000);
    }
}
document.querySelector("button").addEventListener("click", function(event) {
    window.location.reload();
    console.log(event);
})
})
