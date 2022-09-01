console.log("managing cal.js");


let num = document.querySelectorAll("#second_child>div");
for(let i = 0; i<num.length; i++){
    num[i].addEventListener("click" , calculator);
}

bag = "";
function calculator(event) {
    let number = event.target.innerText;

    console.log(bag);
    if(number === "C"){
        bag = "";
        document.getElementById("first_child").innerText = "";
    }
    else if (number === "="){
        if (bag === "") {
            return
        }

        document.getElementById("first_child").innerText = eval(bag);
    }
    else {
        num = bag += number ;
        document.getElementById("first_child").innerText = bag;
    }
    
}