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
//1. method: 
// years.innerHTML = "00";
// months.innerHTML = "00";
// days.innerHTML = "00";
// hours.innerHTML = "00";
// minutes.innerHTML = "00";
// seconds.innerHTML = "00";

//2. method:
let H2Elements = document.getElementsByTagName("h2");
// for (let index = 0; index < H2Elements.length; index++) {
//     H2Elements[index].innerHTML = "00";
// }


//3. method forEach
let H2Elements2 = countdown.querySelectorAll("h2");

//Array.forEach()
//nodeList.forEach()

// H2Elements2.forEach((element) => {
//     element.innerHTML = "00";
// });

//convert to array from html collection
// Array.from(H2elements).forEach(el => {
//      el.innerHTML = "00";    
// });

    [...H2Elements].forEach(el => {
        el.innerHTML = "00";
    });
});

let selectedBirthday = new Date(); 
let birthdayInput = document.querySelector("input[name=birthday]");
birthdayInput.addEventListener("change", (event) => {
    console.log(event.target.value);
// so I reached the event object
//convert to date from dateString
    selectedBirthday = new Date(event.target.value);
    if(selectedBirthday > new Date()){
        alert("Your birthday cannot be later than today!")
    }


})





