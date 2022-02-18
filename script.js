// loading => onload - 1second loading effect
// after calculation - 1 second loading effect



const years = document.getElementById("years");
const months = document.getElementById("months");
const days = document.getElementById("days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

const loading = document.querySelector(".loading");
const countdown = document.querySelector("#countdown");

//This  is the first loading effect:

window.addEventListener("load", () => {
    loading.style.display = "block";
    //miliseconds in set Timeout
    setTimeout(()=>{
        loading.style.display = "none";
        countdown.style.display = "flex";
    }, 2000);
years.innerHTML = "00";
months.innerHTML = "00";
days.innerHTML = "00";
hours.innerHTML = "00";
minutes.innerHTML = "00";
seconds.innerHTML = "00";

});

// time to prepare countdown div





