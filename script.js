const years = document.getElementById("years");
const months = document.getElementById("months");
const days = document.getElementById("days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const countdown = document.querySelector("#countdown");
console.log(countdown);

const loading = document.querySelector(".loading");

window.addEventListener("load", ()=>{
    loading.style.display = "block";
    //miliseconds
    setTimeout(()=>{
        loading.style.display = "none";
        countdown.style.display = "flex"
    }, 1000);

    // years.innerHTML = "00";
    // months.innerHTML = "00";
    // days.innerHTML = "00";
    // hours.innerHTML = "00";
    // minutes.innerHTML = "00";
    // seconds.innerHTML = "00";

    let H2Elements = document.getElementsByTagName("h2");
    // console.log(H2Elements);
    // for (let index = 0; index < H2Elements.length; index++){
    //     H2Elements[index].innerHTML = "00";
    // }

    let H2Elements2 = countdown.querySelectorAll("h2");
    console.log("H2Elements", H2Elements2);

    //nodeList.forEach()
    //Array.forEach()

    // H2Elements2.forEach(element =>{
    //     console.log(element);
    //     element.innerHTML = "00";
    // });

    // convert to array from html Collection
    //Array.from(H2Elements).forEach(el => {
    //     else.innerHTML = "00";
    // });

    [...H2Elements].forEach(el => {
        el.innerHTML = "00";
    });
});
let selectedBirthday = new Date(); 
console.log("today", selectedBirthday);
let birthdayInput = document.querySelector("input[name=birthday]");
birthdayInput.addEventListener("change", (event)=>{
    console.log("dateString", event.target.value);
    //convert to date from dateString
    selectedBirthday = new Date(event.target.value);
    console.log("dateObject", selectedBirthday);
    
    if (selectedBirthday > new Date()){
        alert("Your birthday can not be later than today!");
        return;
    }
    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1467810563316-b5476525c0f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80')";

    loading.style.display = "block";
    setInterval(updateCountdown, 1000);
   setTimeout(()=> {
       loading.style.display = "none";
   })
});

const updateCountdown = () => {
    let dobYear = selectedBirthday.getFullYear();
    let dobMonth = selectedBirthday.getMonth();
    let dobDay = selectedBirthday.getDate();
    let dobHours = selectedBirthday.getHours();
    let dobMinutes = selectedBirthday.getMinutes();
    let dobSeconds = selectedBirthday.getSeconds();

    let now = new Date();

    let currentYear = selectedBirthday.getFullYear();
    let currentMonth = selectedBirthday.getMonth();
    let currentDay = selectedBirthday.getDate();
    let currentHours = selectedBirthday.getHours();
    let currentMinutes = selectedBirthday.getMinutes();
    let currentSeconds = selectedBirthday.getSeconds();

    let yearOfAge = currentYear - dobYear;
    let monthOfAge = currentMonth - dobMonth;
    let dayOfAge = currentDay - dobDay;
    let hourOfAge = currentHours - dobHours;
    let minuteOfAge = currentMinutes - dobMinutes;
    let secondOfAge = currentSeconds - dobSeconds;

    if (monthOfAge < 0) {
        monthOfAge += 12;
        yearOfAge --;
    }

    if (dayOfAge < 0) {
        dayOfAge += 30;
        monthOfAge --;
    }

    //Add values to DOM

    years.innerHTML = yearOfAge.toString().padStart(2,"0");
    months.innerHTML = monthOfAge.toString().padStart(2, "0");
    days.innerHTML = dayOfAge.toString().padStart(2, "0");
    hours.innerHTML = hourOfAge.toString().padStart(2, "0");
    minutes.innerHTML = minuteOfAge.toString().padStart(2, "0");
    seconds.innerHTML = secondOfAge.toString().padStart(2, "0");




}