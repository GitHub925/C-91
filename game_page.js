function loginpage() {
    window.location = "mathlogin.html"
}
var name1 = localStorage.getItem("Player 1 Math");
var name2 = localStorage.getItem("Player 2 Math");
var score1 = 0
var score2 = 0
var factor1
var factor2
var product

document.getElementById("p1name").innerHTML= name1 + ": " + score1;
document.getElementById("p2name").innerHTML= name2 + ": " + score2;

document.getElementById("question").innerHTML = "Player Question: " + name1;
document.getElementById("answer").innerHTML = "Player Answer: " + name2;

function sendnum(){
    factor1 = document.getElementById("num1").value;
    factor2 = document.getElementById("num2").value;
    product = factor1 * factor2;
    question = "<h4 id='eequation_display'> Question: "+factor1+" X "+factor2+" = </h4>";
    input_box = "<br>Answer : <input type='text' id='input_product'>";
    check_button = "<br><br><button class='btn btn-success' onclick='check()'>Check</button>";
    div = question + input_box + check_button;
    document.getElementById("output").innerHTML = div
}