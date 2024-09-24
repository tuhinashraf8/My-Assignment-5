
        // commone function to use many proparty//

        // function to get input value  //

function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value
    const inputNumber = parseFloat(inputValue)
    return inputNumber;
}
        // function to get teg inner text  //

function getInputFieldValueById1(id){
    const inputValue1 = document.getElementById(id).innerText
    const inputNumber1 = parseFloat(inputValue1)
    return inputNumber1;
}



// donation and history btn
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


//  scrolling to navbar color change//

window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar-section');
    const btnBar = document.getElementById('upper-btn-bg');

    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 237, 213, 0.9)';
        btnBar.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';

      } else {
        navbar.style.backgroundColor = 'rgb(255, 237, 213)';
        btnBar.style.backgroundColor = 'rgb(255, 255, 255)';
      }
    });

    
