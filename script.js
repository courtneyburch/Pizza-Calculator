document.querySelector("#pizza1_shape").addEventListener("click", showDimensions);

function showDimensions(){
    const pizza1Shape = document.querySelector('input[name="shape1"]:checked').value;
    let pizza1Area = 0;
    //show the relevant input fields and calculate the area depending on which shape is selected
    if(pizza1Shape === "round"){
        //show input for round dimensions and hide the others
        document.querySelector(".pizza1_dimensions_round").classList.remove("invisible");
        document.querySelector(".pizza1_dimensions_rectangle").classList.add("invisible");
        document.querySelector(".pizza1_dimensions_square").classList.add("invisible");
        
        //show input for square dimension and hide the others
    } else if(pizza1Shape === "square"){
        document.querySelector(".pizza1_dimensions_round").classList.add("invisible");
        document.querySelector(".pizza1_dimensions_rectangle").classList.add("invisible");
        document.querySelector(".pizza1_dimensions_square").classList.remove("invisible");

        //show input for rectangular dimension and hide the others
    } else {
        document.querySelector(".pizza1_dimensions_round").classList.add("invisible")
        document.querySelector(".pizza1_dimensions_rectangle").classList.remove("invisible")
        document.querySelector(".pizza1_dimensions_square").classList.add("invisible")
    }
};

document.querySelector(".calculate_area").onclick = function(){
    const pizza1Shape = document.querySelector('input[name="shape1"]:checked').value;
    if(pizza1Shape === "round"){
        //calculate area of round pizza
        pizza1Radius = document.getElementById("pizza1_round_radius").value;
        pizza1Area = (Math.PI * pizza1Radius ** 2).toFixed(2);

    } else if(pizza1Shape === "square"){
        pizza1Side = document.getElementById("pizza1_square_side").value;
        pizza1Area = (pizza1Side ** 2).toFixed(2);
        
    } else {
        pizza1Length = document.getElementById("pizza1_rectangle_length").value;
        pizza1Width = document.getElementById("pizza1_rectangle_width").value;
        pizza1Area = (pizza1Length * pizza1Width).toFixed(2);
    };
    document.querySelector(".pizza1_area").innerHTML = `The area of Pizza 1 is ${pizza1Area}`;
    document.querySelector(".pizza1_area").classList.toggle('invisible');
    console.log(pizza1Area);   
};


