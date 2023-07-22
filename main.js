const cards = document.querySelectorAll(".card");

let matchedCard = 0;
let cardOne, cardTwo;
let disableDeck = false;



function flipCard({target: clickedCard}) {
  if(cardOne !== clickedCard && !disableDeck) {
      clickedCard.classList.add("flip");
      if(!cardOne) {
          return cardOne = clickedCard;
      }
      cardTwo = clickedCard;
      disableDeck = true;
      let cardOneImg = cardOne.querySelector(".back-view img").src,
      cardTwoImg = cardTwo.querySelector(".back-view img").src;
      matchCards(cardOneImg, cardTwoImg);
  }
}

function matchCards(img1, img2) {
  if(img1 === img2) { // if two cards img matched
    matched++; // increment matched value by1

    // if matched value is 8 that means  user has matched all the cards  (8 * 2 = 16 cards)

    if (matched == 8) {
      setTimeout(() => {
        return shuffleCard();
      }, 1000); //calling shuffleCard function after 1sec
    }
    cardOne.removeEventListener("click", flipCard);
    cardTwo.removeEventListener("click", flipCard);
    cardOne = cardTwo = ""; //setting both card value to blank
    return disableDeck = false;
  }

  // if two card not matched
  setTimeout(() => {
    // adding shake class to both card after 400ms
    cardOne.classList.add("shake");
    cardTwo.classList.add("shake");
  }, 400);

  setTimeout(() => {
    // removing  both shake & flip classes  from the both card after 1.2 seconds
    cardOne.classList.remove("shake", "flip");
    cardTwo.classList.remove("shake", "flip");
    cardOne = cardTwo = ""; //setting both card value to blank
    disableDeck = false;
  }, 1200);
}

function shuffleCard() {
  matchCard = 0;
  disableDeck = false;
  cardOne = cardTwo = "";
  // Creating array of 16 items and Each items is repeated twice
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
  arr.sort(() => Math.random() > 0.5 ? 1 : -1);
  //sorting array item randomly 

  //removing  flip class from all cards and passing random image to each card

  cards.forEach((card, i) => {
    card.classList.remove("flip");
    let imgTag = card.querySelector(".back-view img");
    card.addEventListener("click", flipCard);
  });
}

shuffleCard();

cards.forEach(card => { //adding click event to all cards 
  card.addEventListener("click", flipCard);

});