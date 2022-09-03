console.log('working form.js');


const formData = document.querySelector("form");
formData.addEventListener("submit", submitform);

let array = JSON.parse(localStorage.getItem("deepa")) || [];
function submitform(event) {
    event.preventDefault();
    console.log("working")

    let Name = document.getElementById("name").value;
    let Age = document.getElementById("age").value;
    let Gender = document.getElementById("gender").value;
    let Email = document.getElementById("email").value;
    let Mobile = document.getElementById("mobile_number").value;


    if(Name === "" || Age === "" || Email === "" || Mobile === "" ){
        alert("Please fill your Entire Form")
        return;
    }

    let object = {
        Name,
        Age,
        Gender,
        Email,
        Mobile
    }

    array.push(object);
    localStorage.setItem("deepa", JSON.stringify(array))
    console.log(array);


}