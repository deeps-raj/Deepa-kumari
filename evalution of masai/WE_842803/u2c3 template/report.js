// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks
const formData = document.querySelector("form");
formData.addEventListener("submit", submitData);

function submitData(event) {
    event.preventDefault();
    console.log("working form");

    let Image = formData.image.value;
    let Name = formData.name.value;
    let Batch = formData.batch.value;
    let DSA = formData.dsa.value;
    let Skillathon = formData.cs.value;
    let Coding = formData.coding.value;

    console.log(Image, Name, Batch, DSA, Skillathon, Coding);

    let container = document.querySelector("tbody");
    let row = document.createElement("tr");

    let td1 = document.createElement("td");
    let image = document.createElement("img");
    image.src = Image;

    let td2 = document.createElement("td");
    td2.innerText = Name;

    let td3 = document.createElement("td");
    td3.innerText = Batch;

    let td4 = document.createElement("td");
    td4.innerText = DSA;

    let td5 = document.createElement("td");
    td5.innerText = Skillathon;

    let td6 = document.createElement("td");
    td6.innerText = Coding;

    let obtainedScore = Number(DSA) + Number(Skillathon) +  Number(Coding);
    const totalScore = 30;

    const percentage = ((obtainedScore / totalScore) * 100).toFixed(0);
    console.log(percentage);

    let td7 = document.createElement('td')
    td7.innerText = `${percentage}%`;

    let td8 = document.createElement('td');
    if (percentage > 50) {
        td8.innerText ="Regular"
        td8.style.backgroundColor = "green"
        td8.style.color = "white";
    }
    else{
        td8.innerText = "Async"
        td8.style.backgroundColor = "orange"
        td8.style.color = "black";
    }
     let td9 = document.createElement('td');
     td9.innerText = "Delete";
     td9.style.backgroundColor = "red"
     td9.style.color = "white";
     td9.addEventListener("click",deletedata);
     function deletedata(event){
        event.target.parentNode.remove();
     }

     

    td1.append(image);
    row.append(td1,td2, td3,td4,td5,td6,td7,td8,td9);
    container.append(row);


}
