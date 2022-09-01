console.log("my first bmi calculator");




let calculate = () => {
    let kg = Number(document.getElementById("KG").value);
    let cm = Number(document.getElementById("CM").value);
    console.log(kg,cm);
    let BMI = (kg/ ((cm * cm) / 10000)).toFixed(2);
    console.log(BMI);

    let container = document.getElementById("answer")
    container.innerHTML = "";

    if (BMI <= 18.4){
        let p = document.createElement("p");
        p.innerText="underweight"
        container.append(p);
        console.log("1st",BMI)

    }else if(BMI >= 18.5 && BMI <= 24.9){let p = document.createElement("p");
    p.innerText="normalweight"
    container.append(p);
    console.log("2st",BMI)

    }else if(BMI >= 25 && BMI <= 29.9){let p = document.createElement("p");
    p.innerText="overweight"
    container.append(p);
    console.log("3st",BMI)

    }else if(BMI >= 30){let p = document.createElement("p");
    p.innerText="obese"
    container.append(p);
    console.log("4st",BMI)

    }

    

}