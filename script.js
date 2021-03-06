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
// event.target.value == birthdayInput.value
// so I reached the event object
//convert to date from dateString
    selectedBirthday = new Date(event.target.value);
    if(selectedBirthday > new Date()){
        alert("Your birthday cannot be later than today!");
        return;
    }
    document.body.style.backgroundImage = "url('https:/images.unsplash.com/photo-1467810563316-b5476525c0f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80')";

    loading.style.display = "block";
    setInterval(updateCountdown, 1000);
    // I added an interval to my function with setInternal
    setTimeout(()=>{
        loading.style.display = "none";
    }, 1000);

});

const updateCountdown = () => {
    let dobYear = selectedBirthday.getFullYear();
    let dobMonth = selectedBirthday.getMonth();
    let dobDay = selectedBirthday.getDate();
    let dobHours = selectedBirthday.getHours();
    let dobMinutes = selectedBirthday.getMinutes();
    let dobSeconds = selectedBirthday.getSeconds();

    let now = new Date();

    let currentYear = now.getFullYear();
    let currentMonth = now.getMonth();
    let currentDay = now.getDate();
    let currentHour = now.getHours();
    let currentMinute = now.getMinutes();
    let currentSecond = now.getSeconds();


    //if positive => no problem
    let yearOfAge = currentYear - dobYear;
    let monthOfAge = currentMonth - dobMonth;
    let dayOfAge = currentDay - dobDay;
    let hourOfAge = currentHour - dobHours;
    let minuteOfAge = currentMinute - dobMinutes;
    let secondOfAge = currentSecond - dobSeconds;

    //handling negativity =>

    if(secondOfAge < 0){
        secondOfAge += 60;
        minuteOfAge --;
    }

    if(minuteOfAge < 0){
        minuteOfAge += 60;
        hourOfAge --;
    }

    if(hourOfAge < 0){
        hourOfAge += 24;
        dayOfAge --;
    }

    if(dayOfAge < 0){
        dayOfAge += 30;
        monthOfAge --;
    }

    if(monthOfAge < 0){
        monthOfAge += 12;
        yearOfAge --;
    };

    //Adding values to DOM

    years.innerHTML = yearOfAge.toString().padStart(2, "0");
    months.innerHTML = monthOfAge.toString().padStart(2, "0");
    days.innerHTML = dayOfAge.toString().padStart(2, "0");
    hours.innerHTML = hourOfAge.toString().padStart(2, "0");
    minutes.innerHTML = minuteOfAge.toString().padStart(2, "0");
    seconds.innerHTML = secondOfAge.toString().padStart(2, "0");
}




