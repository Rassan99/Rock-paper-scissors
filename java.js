// function myFunction() {
//     console.log("mama");
    
//   }
  


// computer(){

//     pick=math.random(1-3)
//     if 1 :
//     then paper
//     ..
// }
// human(){
//     h_pick=button data 
//     if rock then 1
//     if paper then 2
//     . . .
// }
// play(){
//     R R = D
//     P P = D
//     S S = D
//     -----
//     R P = COM WINS 
//     --
    
// }
// button.addEventListener("click", myFunction);
function computer() {
    return Math.floor(Math.random() * (3 - 1 + 1)) + 1;
  }
function human(){
    $("button").click(function() {
        let fired_button = $(this).val();
    });
    label.textContent=fired_button;
}
function onClick() {
   label.textContent = 'Error: one or both inputs are empty.';
  }
var label = document.querySelector('p');
var button = document.querySelector('button');
button.addEventListener('click', onClick);
