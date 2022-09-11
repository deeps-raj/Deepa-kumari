let counter = 0;

let counter_data = localStorage.getItem("counterData") || 0;
counter_data = document.getElementById("num_counter");

counter_data.innerText = counter;

let inc_button = document.getElementById("inc")
inc_button.addEventListener("click", incCounter);

function incCounter() {
    counter++;
    counter_data.innerText = counter
}

let dec_button = document.getElementById("dec");
dec_button.addEventListener("click", decCounter);

function decCounter() {
    counter--;
    counter_data.innerText = counter
    localStorage.setItem("counterData", counter)
}