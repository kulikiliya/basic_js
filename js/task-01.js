// Number of categories


const numberOfCategories = document.querySelectorAll(".item")

const mainFn = function (array) {

    const test1 = array.length;
    console.log(`Number of categories: ${test1}`)

    array.forEach((item) => {

        const nameOfCategories = item.querySelector("h2"); 
        console.log(`Category: ${nameOfCategories.textContent}`)

        const elementsOfCategories = item.querySelectorAll("li")
        console.log(`Elements: ${elementsOfCategories.length}`)
    }  
   )
}

mainFn(numberOfCategories)





// 1 часть

// const totalNumberOfCategories = function (array) {
//     let total = 0;
//     array.forEach(() => {
//         total += 1
//     });
//     return total
// };



// // 2 часть

// const nameOfCategories = function (array) {

//     array.forEach((item) => {
//         const nameOfCategories = item.querySelector("h2");
//         console.log(`Category: ${nameOfCategories.textContent}`);
// })
    
// }


// // 3 часть

// const qyuOfCategories = function (array) {
//     array.forEach((item) => {
//         const listItems = item.querySelectorAll("li");
//         let sum = 0;
//         listItems.forEach(() => {
//             sum += 1;
//         });
//         return console.log(`Elements: ${sum}`);
//     });
// }


// // Total

// const totalFn = function (array) {
    
// const totalNumberOfCategories = function (array) {
//     let total = 0;
//     array.forEach(() => {
//         total += 1
//     });
//     console.log(`Number of categories: ${total}`)
//     };
    
//     const nameOfCategories = function (array) {

//         array.forEach((item) => {
//             const nameOfCategories = item.querySelector("h2");
//             console.log(`Category: ${nameOfCategories.textContent}`);
//         })
//     };

//     const qyuOfCategories = function (array) {
//         array.forEach((item) => {
//             const listItems = item.querySelectorAll("li");
//             let sum = 0;
//             listItems.forEach(() => {
//                 sum += 1;
//             });
//             console.log(`Elements: ${sum}`);
//         });
//     };

//     totalNumberOfCategories(array)
//     nameOfCategories(array)
//     qyuOfCategories(array)
// }

// totalFn(numberOfCategories)