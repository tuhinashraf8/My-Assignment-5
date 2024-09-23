                 // donate for nuakhali //

document.getElementById("btn-nuakhali").addEventListener("click", function () {
    const myWallet = getInputFieldValueById1('my-walet')
    const MyDonation = getInputFieldValueById('donations')
    const totalDonation = getInputFieldValueById1('donate-for-nuakhali')
    const modal = document.getElementById('my_modal_5');

    if (MyDonation <= 0 || isNaN(MyDonation)) {
        return alert("plz batpari koiren na ")
    }
    modal.showModal();
    // total donation part //
    const totalDonationForNu = totalDonation + MyDonation;
    const totalDonationForNua = document.getElementById("donate-for-nuakhali");
    totalDonationForNua.innerText = totalDonationForNu.toFixed(2);
    // my wallent part //
    const myWaletElement = myWallet - MyDonation;
    const totalMymonyInWalet = document.getElementById("my-walet");
    totalMymonyInWalet.innerText = myWaletElement.toFixed(2);

    // history part  //
    const historyContenar = document.createElement("div");
    historyContenar.className =
        "mt-6 rounded-2xl border-solid border-2 bg-lime-400 p-8";
    historyContenar.innerHTML = `
<h3 class="font-bold">${MyDonation} Taka is Donated for Flood at Noakhali, Bangladesh</h3>
    <p>${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()} (Bangladesh Standard Time)</p>
`
    const historyMainContenar = document.getElementById("history-contenar")
    historyMainContenar.insertBefore(historyContenar, historyMainContenar.firstChild)

})

                    // donate for feni //

document.getElementById("btn-feni").addEventListener("click", function () {
    const myWallet = getInputFieldValueById1('my-walet')
    const MyDonation = getInputFieldValueById('donations2')
    const totalDonation = getInputFieldValueById1('donate-for-feni')
    const modal = document.getElementById('my_modal_5');

    if (MyDonation <= 0 || isNaN(MyDonation)) {
        return alert("plz batpari koiren na ")
    }
    modal.showModal();
    // total donation part //
    const totalDonationForFeni = totalDonation + MyDonation;
    const setTotalDonationForFeni = document.getElementById("donate-for-feni");
    setTotalDonationForFeni.innerText = totalDonationForFeni.toFixed(2)

    // my wallent part //
    const myWaletElement = myWallet - MyDonation;
    const totalMymonyInWalet = document.getElementById("my-walet");
    totalMymonyInWalet.innerText = myWaletElement.toFixed(2);

    // history part  //
    const historyContenar = document.createElement("div");
    historyContenar.className =
        "mt-6 rounded-2xl border-solid border-2 bg-lime-400 p-8";
    historyContenar.innerHTML = `
<h3 class="font-bold">${MyDonation} Taka is Donated for Flood at feni, Bangladesh</h3>
    <p>${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()} (Bangladesh Standard Time)</p>
`
    const historyMainContenar = document.getElementById("history-contenar")
    historyMainContenar.insertBefore(historyContenar, historyMainContenar.firstChild)
})

                // donate for quota //

document.getElementById("btn-quota").addEventListener("click", function () {
    const myWallet = getInputFieldValueById1('my-walet')
    const MyDonation = getInputFieldValueById('donations3')
    const totalDonation = getInputFieldValueById1('donate-for-quota')
    const modal = document.getElementById('my_modal_5');

    if (MyDonation <= 0 || isNaN(MyDonation)) {
        return alert("plz batpari koiren na ")
    }
    modal.showModal();
    // total donation part //
    const totalDonationForQuota = totalDonation + MyDonation;
    const setTotalDonationForQuota = document.getElementById("donate-for-quota");
    setTotalDonationForQuota.innerText = totalDonationForQuota.toFixed(2)

    // my wallent part //
    const myWaletElement = myWallet - MyDonation;
    const totalMymonyInWalet = document.getElementById("my-walet");
    totalMymonyInWalet.innerText = myWaletElement.toFixed(2);

    // history part  //
    const historyContenar = document.createElement("div");
    historyContenar.className =
        "mt-6 rounded-2xl border-solid border-2 bg-lime-400 p-8";
    historyContenar.innerHTML = `
    <h3 class="font-bold">${MyDonation} Taka is Donated for quota movement freedom fighter, Bangladesh</h3>
    <p>${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()} (Bangladesh Standard Time)</p>
    `
    const historyMainContenar = document.getElementById("history-contenar")
    historyMainContenar.insertBefore(historyContenar, historyMainContenar.firstChild)
})

                // donate for orphans  //

    document.getElementById("btn-orphans").addEventListener("click", function () {
    const myWallet = getInputFieldValueById1('my-walet')
    const MyDonation = getInputFieldValueById('donations4')
    const totalDonation = getInputFieldValueById1('donate-for-orphans')
    const modal = document.getElementById('my_modal_5');

    if (MyDonation <= 0 || isNaN(MyDonation)) {
        return alert("plz batpari koiren na ")
    }
    modal.showModal();

    // total donation part //
    const totalDonationForOrphans = totalDonation + MyDonation;
    const setTotalDonationForOrphans = document.getElementById("donate-for-orphans");
    setTotalDonationForOrphans.innerText = totalDonationForOrphans.toFixed(2)

    // my wallent part //
    const myWaletElement = myWallet - MyDonation;
    const totalMymonyInWalet = document.getElementById("my-walet");
    totalMymonyInWalet.innerText = myWaletElement.toFixed(2);

    // history part  //
    const historyContenar = document.createElement("div");
    historyContenar.className =
        "mt-6 rounded-2xl border-solid border-2 bg-lime-400 p-8";
    historyContenar.innerHTML = `
    <h3 class="font-bold">${MyDonation} Taka is Donated for Orphans Bangladesh</h3>
        <p>${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()} (Bangladesh Standard Time)</p>
    `
    const historyMainContenar = document.getElementById("history-contenar")
    historyMainContenar.insertBefore(historyContenar, historyMainContenar.firstChild)
    })



