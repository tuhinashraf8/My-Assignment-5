// donation btn
const donationbtn = document.getElementById("donation-btn")
const historybtn = document.getElementById("History-btn")
const cardContenar = document.getElementById("card-contenar");
const historyMainContenar = document.getElementById("history-contenar")

donationbtn.addEventListener("click", function(){
    donationbtn.classList.add("bg-lime-400");
    historybtn.classList.remove("bg-lime-400");
    cardContenar.classList.remove("hidden")
    historyMainContenar.classList.add("hidden")
});


historybtn.addEventListener("click", function(){
    historybtn.classList.add("bg-lime-400")
    donationbtn.classList.remove("bg-lime-400")
    cardContenar.classList.add("hidden")
    historyMainContenar.classList.remove("hidden")

});


