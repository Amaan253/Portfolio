var circle = document.getElementById("circle");
var upbtn = document.getElementById("upbtn");
var downbtn = document.getElementById("downbtn");

var rotatevalue = circle.style.transform;
var rotatesum;
upbtn.onclick = function () {
    rotatesum = rotatevalue + "rotate(-90deg)";
    circle.style.transform = rotatesum;
    rotatevalue = rotatesum;
}
downbtn.onclick = function () {
    rotatesum = rotatevalue + "rotate(90deg)";
    circle.style.transform = rotatesum;
    rotatevalue = rotatesum;
}
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
    modal.style.display = "block";
}
modal
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}