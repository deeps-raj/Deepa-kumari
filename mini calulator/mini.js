console.log("I LOVE  MY INDIA");

let add = () => {
    let num_1 = Number(document.getElementById("num_1").value);
    let num_2 = Number(document.getElementById("num_2").value);

    let Addition = num_1 + num_2
    console.log(Addition);
    let container = document.getElementById("answer");
    container.innerHTML = null;

    let sum = document.createElement("p");
    sum.innerText = `${num_1} + ${num_2} = ${Addition}`;
    container.append(sum);
}


let subtract = () => {
    let num_1 = Number(document.getElementById("num_1").value);
    let num_2 = Number(document.getElementById("num_2").value);

    let subtraction = num_1 - num_2
    console.log(subtraction);
    let container = document.getElementById("answer");
    container.innerHTML = null;

    let sum = document.createElement("p");
    sum.innerText = `${num_1} - ${num_2} = ${subtraction}`;
    container.append(sum);
}


let multiply = () => {
    let num_1 = Number(document.getElementById("num_1").value);
    let num_2 = Number(document.getElementById("num_2").value);

    let multipliction = num_1 * num_2
    console.log(multipliction);
    let container = document.getElementById("answer");
    container.innerHTML = null;

    let sum = document.createElement("p");
    sum.innerText = `${num_1} x ${num_2} = ${multipliction}`;
    container.append(sum);
}


let divide = () => {
    let num_1 = Number(document.getElementById("num_1").value);
    let num_2 = Number(document.getElementById("num_2").value);

    let division = num_1 / num_2
    console.log(division);
    let container = document.getElementById("answer");
    container.innerHTML = null;

    let sum = document.createElement("p");
    sum.innerText = `${num_1} ÷ ${num_2} = ${division}`;
    container.append(sum);
}