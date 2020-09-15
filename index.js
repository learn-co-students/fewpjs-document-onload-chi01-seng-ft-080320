// Your code goes here
document.addEventListener("DOMContentLoaded", function () {
    updateDOM()
});

function updateDOM() {
let element = document.querySelector("p#text");
element.innerHTML = 'This is really cool!';
}