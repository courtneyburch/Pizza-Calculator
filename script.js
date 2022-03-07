
// document.querySelector("#pizza1_shape").addEventListener("click", showDimensions)
// document.querySelector("#pizza2_shape").addEventListener("click", showDimensions)

// function showDimensions(){
//     const pizza1Shape = document.querySelector('input[name="shape1"]:checked').value;
//     const pizza2Shape = document.querySelector('input[name="shape2"]:checked').value;
//     console.log(pizza1Shape);
//     //show the relevant input fields depending on which shape is selected
//     if(pizza1Shape === "round"){
//         //show input for round dimensions and hide the others
//         document.querySelector(".round").classList.remove("invisible");
//         document.querySelector(".rectangle").classList.add("invisible");
//         document.querySelector(".square").classList.add("invisible");
        
//         //show input for square dimension and hide the others
//     } else if(pizza1Shape === "square"){
//         document.querySelector(".round").classList.add("invisible");
//         document.querySelector(".rectangle").classList.add("invisible");
//         document.querySelector(".square").classList.remove("invisible");

//         //show input for rectangular dimension and hide the others
//     } else {
//         document.querySelector(".round").classList.add("invisible")
//         document.querySelector(".rectangle").classList.remove("invisible")
//         document.querySelector(".square").classList.add("invisible")
//     }
// };

function show_round_dim_pizza1(){
    document.querySelector(".round1").classList.remove("invisible");
    document.querySelector(".rectangle1").classList.add("invisible");
    document.querySelector(".square1").classList.add("invisible");
}
function show_round_dim_pizza2(){
    document.querySelector(".round2").classList.remove("invisible");
    document.querySelector(".rectangle2").classList.add("invisible");
    document.querySelector(".square2").classList.add("invisible");
}

function show_square_dim_pizza1(){
    document.querySelector(".round1").classList.add("invisible");
    document.querySelector(".rectangle1").classList.add("invisible");
    document.querySelector(".square1").classList.remove("invisible");
}

function show_square_dim_pizza2(){
    document.querySelector(".round2").classList.add("invisible");
    document.querySelector(".rectangle2").classList.add("invisible");
    document.querySelector(".square2").classList.remove("invisible");
}
function show_rect_dim_pizza1(){
    document.querySelector(".round1").classList.add("invisible");
    document.querySelector(".rectangle1").classList.remove("invisible");
    document.querySelector(".square1").classList.add("invisible");
}
function show_rect_dim_pizza2(){
    document.querySelector(".round2").classList.add("invisible");
    document.querySelector(".rectangle2").classList.remove("invisible");
    document.querySelector(".square2").classList.add("invisible");
}

// document.querySelector(".calculate_area").onclick = function(shape){
//     const pizza1Shape = document.querySelector('input[name="shape1"]:checked').value;
//     if(pizza1Shape === "round"){
//         //calculate area of round pizza
//         pizza1Radius = document.getElementById("pizza1_round_radius").value;
//         pizza1Area = (Math.PI * pizza1Radius ** 2).toFixed(1);

//     } else if(pizza1Shape === "square"){
//         pizza1Side = document.getElementById("pizza1_square_side").value;
//         pizza1Area = (pizza1Side ** 2).toFixed(1);
        
//     } else {
//         pizza1Length = document.getElementById("pizza1_rectangle_length").value;
//         pizza1Width = document.getElementById("pizza1_rectangle_width").value;
//         pizza1Area = (pizza1Length * pizza1Width).toFixed(1);
//     };
//     document.querySelector(".pizza1_area").innerHTML = `The area of Pizza 1 is ${pizza1Area} square inches.` ;
//     document.querySelector(".pizza1_area").classList.toggle('invisible');
//     console.log(pizza1Area);   
// };



// const pizza1Shapes = document.querySelectorAll('input[type=radio][name=shape1]');
// pizza1Shape.forEach(shape => shape.addEventListener('change', ())