let enteredWeight = document.getElementById("weight");
let enteredHeight = document.getElementById("height");
let btn = document.getElementById("submit");
let display = document.getElementById("display");

btn.addEventListener("click",()=>{
    let weight = enteredWeight.value;
    let height = enteredHeight.value;
    
    let bmi = weight / (height * height);

    display.innerHTML = `<h2>Your BMI is ${bmi}</h2>`

    // console.log(weight);
    // console.log(height);
    // console.log(bmi);
})
