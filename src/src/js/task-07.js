const inputBox = document.querySelector("#font-size-control");
const span = document.querySelector("#text")

inputBox.addEventListener("input" , (event) => {
    span.style.fontSize = event.currentTarget.value + "px";
});