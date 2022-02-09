let bonus = 20;

function sum(first, second) {
    let result = first + second + bonus;
    return result;
}

const output = sum(9, 10);
console.log(bonus);
console.log(output);