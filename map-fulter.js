const numbers = [4, 3, 5, 6, 7];
// const output = [];

// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element*element;
//     output.push(result);
// }

// function square(elements) {
//     return elements * elements;
// }
// const result =  numbers.map(function(element) {
//     return element * element;
// });


const result2 = numbers.filter(x=> x>=5);
console.log(result2);

const result3 = numbers.find(x=> x> 5);
console.log(result3);

const result = numbers.map((x,y)=> x*y);


console.log(result);