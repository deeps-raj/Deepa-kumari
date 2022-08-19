// >Arrow Method;
let CheckAge = () => {
    let age = document.getElementById("age").value;

    let container = document.getElementById("answer");
    container.innerHTML = null;

    if (age > 18){
        let p = document.createElement("p");
        p.innerText = 'You can drive in India!'
        p.style.color = "green";
        container.append(p);
    }
    else if (age < 18){
        let p = document.createElement("p");
        p.innerText = 'You cant drive in India!'
        p.style.color = "red";
        container.append(p);

    }
    else{
            let p = document.createElement("p");
            p.innerText = 'You are just old enough to drive in India!'
            p.style.color = "purple";
            container.append(p);
    }

};