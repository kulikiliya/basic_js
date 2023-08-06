function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const mainDiv = document.querySelector("#boxes")
const amountInput = document.querySelector("#controls input")
const create = document.querySelector("[data-create]")
const destroy = document.querySelector("[data-destroy]")

create.addEventListener("click", function createBoxes() {
  
  const number = Number(amountInput.value);

  let divW = 30;
  let divH = 30;
  
  for (let i = 0; i < number; i += 1) {

    const newDiv = document.createElement("div");
    newDiv.style.width = divW + "px";
    newDiv.style.height = divH + "px";
    newDiv.style.backgroundColor = getRandomHexColor();
    mainDiv.append(newDiv);

    divW += 10;
    divH += 10;
  }

});

destroy.addEventListener("click", () => {
[...mainDiv.children].forEach( (element) => {
  element.remove();
});
});
