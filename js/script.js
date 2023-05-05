var button = document.getElementById("color-button");
button.addEventListener("click", logClick, changeButtonColor);

function changeButtonColor(){
    console.log("color changed");
    var body = document.getElementById("body");
    body.style.backgroundColor = "red";


}

function logClick(){
    console.log("button clicked");
}
