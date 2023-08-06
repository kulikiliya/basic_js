const counterValue = document.querySelector("#value");
const buttonRemove = document.querySelector(`button[data-action="decrement"]`)
const buttonAdd = document.querySelector(`button[data-action="increment"]`)


const counter = {
    value:0,
    increment() {
        this.value += 1
    },
    decrement() {
        this.value -= 1
    },
};

buttonRemove.addEventListener('click', () => {
    counter.decrement();
    counterValue.textContent = counter.value;
});

buttonAdd.addEventListener('click', () => {
    counter.increment();
    counterValue.textContent = counter.value;
});
