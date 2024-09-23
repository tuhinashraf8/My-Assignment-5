

// <!-- donate for nuakhali -->

function donateBtnNuakhali() {
    const myWaletEl = parseFloat(document.getElementById("my-walet").innerText);
    const totalDonationForN = parseFloat(document.getElementById("total-donation-for-n").innerText);
    const donation = parseFloat(document.getElementById("donations").value);
    const modal = document.getElementById('my_modal_5');

    if (donation <= 0 || isNaN(donation)) {
        return alert("plz batpari koiren na ")
    }
    modal.showModal();
    // total donation part //
    const totalDonationForNu = totalDonationForN + donation;
    const totalDonationForNua = document.getElementById("total-donation-for-n");
    totalDonationForNua.innerText = totalDonationForNu.toFixed(2);
    // my wallent part //
    const myWaletElement = myWaletEl - donation;
    const totalMymonyInWalet = document.getElementById("my-walet");
    totalMymonyInWalet.innerText = myWaletElement.toFixed(2);

    // history part  //
    const historyContenar = document.createElement("div");
    historyContenar.className =
        "mt-6 rounded-2xl border-solid border-2 bg-lime-400 p-8";
    historyContenar.innerHTML = `
    <h3 class="font-bold">${donation} Taka is Donated for Flood at Noakhali, Bangladesh</h3>
        <p>${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()} (Bangladesh Standard Time)</p>
    `
    const historyMainContenar = document.getElementById("history-contenar")
    historyMainContenar.insertBefore(historyContenar, historyMainContenar.firstChild)


}

// <!-- donation for feni -->

function doneteBtnForFeni() {
    const myWaletEl = parseFloat(document.getElementById("my-walet").innerText);
    const donateforfeni = parseFloat(document.getElementById("donate-for-feni").innerText)
    const donation2 = parseFloat(document.getElementById("donations2").value);
    const modal = document.getElementById('my_modal_5');

    if (donation2 <= 0 || isNaN(donation2)) {
        return alert("plz batpari koiren na ")
    }
    modal.showModal();
    // total donation part //
    const totalDonationForFeni = donateforfeni + donation2;
    const setTotalDonationForFeni = document.getElementById("donate-for-feni");
    setTotalDonationForFeni.innerText = totalDonationForFeni.toFixed(2)

    // my wallent part //
    const myWaletElement = myWaletEl - donation2;
    const totalMymonyInWalet = document.getElementById("my-walet");
    totalMymonyInWalet.innerText = myWaletElement.toFixed(2);

    // history part  //
    const historyContenar = document.createElement("div");
    historyContenar.className =
        "mt-6 rounded-2xl border-solid border-2 bg-lime-400 p-8";
    historyContenar.innerHTML = `
    <h3 class="font-bold">${donation2} Taka is Donated for Flood at feni, Bangladesh</h3>
        <p>${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()} (Bangladesh Standard Time)</p>
    `
    const historyMainContenar = document.getElementById("history-contenar")
    historyMainContenar.insertBefore(historyContenar, historyMainContenar.firstChild)

}

// <!-- donation for quota movement freedom fighter -->

function doneteBtnForQuota() {
    const myWaletEl = parseFloat(document.getElementById("my-walet").innerText);
    const donateforQuota = parseFloat(document.getElementById("donate-for-quota").innerText)
    const donation3 = parseFloat(document.getElementById("donations3").value);
    const modal = document.getElementById('my_modal_5');

    if (donation3 <= 0 || isNaN(donation3)) {
        return alert("plz batpari koiren na ")
    }
    modal.showModal();
    // total donation part //
    const totalDonationForQuota = donateforQuota + donation3;
    const setTotalDonationForQuota = document.getElementById("donate-for-quota");
    setTotalDonationForQuota.innerText = totalDonationForQuota.toFixed(2)

    // my wallent part //
    const myWaletElement = myWaletEl - donation3;
    const totalMymonyInWalet = document.getElementById("my-walet");
    totalMymonyInWalet.innerText = myWaletElement.toFixed(2);

    // history part  //
    const historyContenar = document.createElement("div");
    historyContenar.className =
        "mt-6 rounded-2xl border-solid border-2 bg-lime-400 p-8";
    historyContenar.innerHTML = `
    <h3 class="font-bold">${donation3} Taka is Donated for quota movement freedom fighter, Bangladesh</h3>
        <p>${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()} (Bangladesh Standard Time)</p>
    `
    const historyMainContenar = document.getElementById("history-contenar")
    historyMainContenar.insertBefore(historyContenar, historyMainContenar.firstChild)

}

// <!-- donate for orphans -->

function doneteBtnForOrphans() {
    const myWaletEl = parseFloat(document.getElementById("my-walet").innerText);
    const donateforOrphans = parseFloat(document.getElementById("donate-for-orphans").innerText)
    const donation4 = parseFloat(document.getElementById("donations4").value);
    const modal = document.getElementById('my_modal_5');

    if (donation4 <= 0 || isNaN(donation4)) {
        return alert("plz batpari koiren na ")
    }
    modal.showModal();
    // total donation part //
    const totalDonationForOrphans = donateforOrphans + donation4;
    const setTotalDonationForOrphans = document.getElementById("donate-for-orphans");
    setTotalDonationForOrphans.innerText = totalDonationForOrphans.toFixed(2)

    // my wallent part //
    const myWaletElement = myWaletEl - donation4;
    const totalMymonyInWalet = document.getElementById("my-walet");
    totalMymonyInWalet.innerText = myWaletElement.toFixed(2);

    // history part  //
    const historyContenar = document.createElement("div");
    historyContenar.className =
        "mt-6 rounded-2xl border-solid border-2 bg-lime-400 p-8";
    historyContenar.innerHTML = `
    <h3 class="font-bold">${donation4} Taka is Donated for Orphans Bangladesh</h3>
        <p>${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()} (Bangladesh Standard Time)</p>
    `
    const historyMainContenar = document.getElementById("history-contenar")
    historyMainContenar.insertBefore(historyContenar, historyMainContenar.firstChild)

}



function dddd(event){
    console.log(event.innerText)
}