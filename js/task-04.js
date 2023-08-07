const counterValue = document.querySelector("#value");
const buttonRemove = document.querySelector(`button[data-action="decrement"]`)
const buttonAdd = document.querySelector(`button[data-action="increment"]`)


let value = 0;

buttonRemove.addEventListener('click', () => {
    value -= 1;
    counterValue.textContent = value
    
});

buttonAdd.addEventListener('click', () => {
    value += 1;
    counterValue.textContent = value;
});
