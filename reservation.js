//add hover class in selected li items
let list = document.querySelectorAll(".navigation li");
function activeLink(){
    list.forEach((item) => item.classList.remove("hovered"));

    this.classList.add("hovered");
}
list.forEach((item) => item.addEventListener("mouseover",activeLink));

//menu toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = () => {
    navigation.classList.toggle("active");
    main.classList.toggle("active");
}

//light mode dark mode
const body = document.querySelector("body");
const sideBar = document.querySelector(".navigation");
const toggles = document.getElementById("toggleDark");
const box = document.querySelector(".containers");

// Check if user previously selected dark mode
let isDarkMode = localStorage.getItem("darkMode") === "enabled";
updateDarkModeUI(isDarkMode);

toggles.addEventListener("click", () => {
    isDarkMode = !isDarkMode; // Toggle dark mode
    updateDarkModeUI(isDarkMode);
    localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");

    body.style.transition = "0.5s";
});

function updateDarkModeUI(isDarkMode) {
    if (isDarkMode) {
        toggles.classList.add("bi-brightness-high-fill");
        toggles.classList.remove("bi-moon");
        enableDarkMode();
    } else {
        toggles.classList.remove("bi-brightness-high-fill");
        toggles.classList.add("bi-moon");
        disableDarkMode();
    }
}

function enableDarkMode() {
    body.style.background = "#0D0D0D";
    body.style.color = "white";
    sideBar.classList.add("dark-mode");
    box.classList.add("dark-box");
}

function disableDarkMode() {
    body.style.background = "#fff";
    body.style.color = "#222";
    sideBar.classList.remove("dark-mode");
    box.classList.remove("dark-box");
}


// const form = document.querySelector("form"),
// nextBtn = document.querySelector(".nextBtn"),
// backtBtn = document.querySelector(".backBtn"), 
// allinput = document.querySelectorAll(".first input");


// nextBtn.addEventListener("click", () => {
//     allinput.forEach(select => {
//         if( input.value != ""){
//             form.classList.add('setActive');
//         }
//         else{
//             form.classList.remove('setActive');
//         }
//     })
// })
// backtBtn.addEventListener("click", () =>  form.classList.remove('setActive'));