var p1;
var p2;
function game(){
    p1 = document.getElementById("name1input").value;
    p2 = document.getElementById("name2input").value;

    localStorage.setItem("Player 1 Math", p1);
    localStorage.setItem("Player 2 Math", p2);

    window.location="math.html"
}