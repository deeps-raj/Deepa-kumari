console.log("working button.js");




const btnArr = [
    {name: "Primary", color: "white", bgcolor: "blue"},
    {name: "Secondary", color: "white", bgcolor: "grey"},
    {name: "Danger", color: "white", bgcolor: "red"},
    {name: "Warning", color: "black", bgcolor: "yellow"},
    {name: "Info", color: "white", bgcolor: "cyan"},
    {name: "Light", color: "black", bgcolor: "white"},
    {name: "Success", color: "white", bgcolor: "green"},
    {name: "Dark", color: "white", bgcolor: "black"},
    {name: "Link", color: "blue", bgcolor: "white"},
    {name: "Dark Pink", color: "blue", bgcolor: "pink"},
];


let showButton = (data) => {
    let container = document.getElementById("showButton");

    data.forEach((el) => {
        console.log(el);
        let mybutton = document.createElement("button");
        mybutton.innerText = el.name;
        mybutton.style.color = el.color;
        mybutton.style.backgroundColor = el.bgcolor;

        container.append(mybutton)
    })
        
}

showButton(btnArr)