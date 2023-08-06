const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

const addYourLi = function(array) {
  
  array.forEach((item) => {
    
    const newElement = document.createElement("li");
    newElement.textContent = item;
    newElement.classList.add("item");
    list.append(newElement);
    
  });

}
addYourLi(ingredients);
