document.addEventListener("DOMContentLoaded", function () {
    // const cardContainer = document.querySelector(".cards");
    const cardContainer = document.getElementById("cards");

    const prevButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
  
    const scrollDistance = 308; // Adjust this value based on the width of your cards
  
    prevButton.addEventListener("click", function () {
        if(cardContainer.scrollLeft>0){

            cardContainer.scrollLeft -= scrollDistance;
        }
        else{
            cardContainer.scrollLeft=cardContainer.scrollWidth-cardContainer.clientWidth+1;
        }
    });
  
    nextButton.addEventListener("click", function () {
        console.log(cardContainer.scrollWidth-cardContainer.clientWidth+1)
        console.log(cardContainer.scrollLeft)
        if(cardContainer.scrollLeft<cardContainer.scrollWidth-cardContainer.clientWidth){

            cardContainer.scrollLeft += scrollDistance;
        }
        else{
            cardContainer.scrollLeft=0;
        }
    });

  });
  