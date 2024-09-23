
function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value
    const inputNumber = parseFloat(inputValue)
    return inputNumber;
}


function getInputFieldValueById1(id){
    const inputValue1 = document.getElementById(id).innerText
    const inputNumber1 = parseFloat(inputValue1)
    return inputNumber1;
}





// donation btn
const donationbtn = document.getElementById("donation-btn")
const historybtn = document.getElementById("History-btn")
const cardContenar = document.getElementById("card-contenar");
const historyMainContenar = document.getElementById("history-contenar")




donationbtn.addEventListener("click", function () {
    donationbtn.classList.add("bg-lime-400");
    historybtn.classList.remove("bg-lime-400");
    cardContenar.classList.remove("hidden")
    historyMainContenar.classList.add("hidden")
});


historybtn.addEventListener("click", function () {
    donationbtn.classList.remove("bg-lime-400")
    historybtn.classList.add("bg-lime-400")
    cardContenar.classList.add("hidden")
    historyMainContenar.classList.remove("hidden")

});





    
