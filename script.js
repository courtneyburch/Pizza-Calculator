//function to show the relevant dimensions for round/square and hide the others
function show_round_dim_pizza1(){
    document.querySelector(".round1").classList.remove("invisible");
    document.querySelector(".rectangle1").classList.add("invisible");
}
function show_round_dim_pizza2(){
    document.querySelector(".round2").classList.remove("invisible");
    document.querySelector(".rectangle2").classList.add("invisible");
}

function show_rect_dim_pizza1(){
    document.querySelector(".round1").classList.add("invisible");
    document.querySelector(".rectangle1").classList.remove("invisible");
}
function show_rect_dim_pizza2(){
    document.querySelector(".round2").classList.add("invisible");
    document.querySelector(".rectangle2").classList.remove("invisible");
}

//function to calculate area of both pizzas and compare them, then display result
document.querySelector("#calculate").addEventListener("click", calc);
function calc(){
    document.getElementById("results").innerHTML = '';//clear any previous results if necessary

    let area1 = 0; //area of pizza 1
    const shape1 = document.querySelector('input[name="shape1"]:checked').value; //get dimensions of pizza1
    const qty1 = document.querySelector('input[name="pizza1_qty"]').value; //get quantity of pizza 1
    const price1 = document.querySelector('input[name="pizza1_price"]').value; //get price of pizza 1
    let totalArea1 = 0; //total area of pizza 1
    let totalCost1 = 0; //total cost of pizza 1
    let unitCost1 = 0; //cost per suqare inch of pizza 1

    let area2 = 0;
    const shape2 = document.querySelector('input[name="shape2"]:checked').value; //get dimensions of pizza2
    const qty2 = document.querySelector('input[name="pizza2_qty"]').value; //get quantity of pizza 2
    const price2 = document.querySelector('input[name="pizza2_price"]').value; //get price of pizza 2
    let totalArea2 = 0; //total area of pizza 2
    let totalCost2 = 0; //total cost of pizza 2
    let unitCost2 = 0; //cost per suqare inch of pizza 2

    let result = '' //result string

    //calculate area of pizza 1
    if(shape1 == "round"){
        pizza1Diameter = document.querySelector('input[name="pizza1_round_diam"]').value;
        area1 = Math.PI * pizza1Diameter;
    } else if(shape1 == "rectangle"){
        pizza1Length = document.querySelector('input[name="pizza1_rectangle_length"]').value;
        pizza1Width = document.querySelector('input[name="pizza1_rectangle_width"]').value;
        area1 = pizza1Length * pizza1Width;
    }

    //calculate total area of pizza 1
    totalArea1 = area1 * qty1;

    //calculate total cost of pizza 1
    totalCost1 = price1 * qty1;

    //calculate unit cost of pizza 1 and round to two decimal places
    unitCost1 = (totalCost1 / totalArea1).toFixed(2);

    //calculate area of pizza 2
    if(shape2 == "round"){
        pizza2Diameter = document.querySelector('input[name="pizza2_round_diam"]').value;
        area2 = (Math.PI * pizza2Diameter).toFixed(2);
    } else if(shape2 == "rectangle"){
        pizza2Length = document.querySelector('input[name="pizza2_rectangle_length"]').value;
        pizza2Width = document.querySelector('input[name="pizza2_rectangle_width"]').value;
        area2 = (pizza2Length * pizza2Width).toFixed(2);
    }
    //calculate total area of pizza 2
    totalArea2 = area2 * qty2;

    //calculate total cost of pizza 2
    totalCost2 = price2 * qty2;

    //calculate unit cost of pizza 2 and round to two decimal places
    unitCost2 = (totalCost2 / totalArea2).toFixed(2);

    //compare the two unit costs and decide which one is the best deal. Populate result string with correct outcome
    if(unitCost1 < unitCost2){
        result = `Pizza 1 has a cost of $${unitCost1} per square inch and Pizza 2 has a cost of $${unitCost2} per square inch. <strong>Pizza 1 is a better value.</strong>`
    } else {
        result = `Pizza 1 has a cost of $${unitCost1} per square inch and Pizza 2 has a cost of $${unitCost2} per square inch. <strong>Pizza 2 is a better value.</strong>`
    }
    
    //append result to the main container
    let displayResult = document.getElementById('results'); //get reference to results div
    displayResult.classList.add('results'); //add class name for styling

    //validate answer before it is displayed
    if(!parseFloat(unitCost1) || !parseFloat(unitCost2)){ //if either value is falsy
        
        displayResult.innerHTML += "Please check entries and try again." //display error message

    } else{
        displayResult.innerHTML += result; //display the result
    }
}
//add event listener to Reset button
document.querySelector("#reset").addEventListener("click", clearInput)
//function to clear inputs
funcion
