document.addEventListener("DOMContentLoaded", function () {
  // const cardContainer = document.querySelector(".cards");
  const cardContainer = document.getElementById("cards");

  const prevButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");

  const scrollDistance = 308; // Adjust this value based on the width of your cards

  prevButton.addEventListener("click", function () {
    if (cardContainer.scrollLeft > 0) {
      cardContainer.scrollLeft -= scrollDistance;
    } else {
      cardContainer.scrollLeft =
        cardContainer.scrollWidth - cardContainer.clientWidth + 1;
    }
  });

  nextButton.addEventListener("click", function () {
    console.log(cardContainer.scrollWidth - cardContainer.clientWidth + 1);
    console.log(cardContainer.scrollLeft);
    if (
      cardContainer.scrollLeft <
      cardContainer.scrollWidth - cardContainer.clientWidth
    ) {
      cardContainer.scrollLeft += scrollDistance;
    } else {
      cardContainer.scrollLeft = 0;
    }
  });
});

/*the contact part */
const form = document.querySelector("form");
let j;
j = 0;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("sub").value = "submitting...";
  if (j == 0) {
    let data = new FormData(form);
    fetch(
      "https://script.google.com/macros/s/AKfycbyT29faccEPavBuW274fKRR-lfCitl0-NURxRde_pxq1_9HYi-M35FEncnr872wP_Vd/exec",
      {
        method: "POST",
        body: data,
      }
    )
      .then((res) => res.text())
      .then((data) => {
        j = j + 1;
        console.log(data);
        document.querySelector("#sub").value = data;
        console.log(j);
      });
  } else {
    document.getElementById("sub").value = "You are already registered!";
  }
});
