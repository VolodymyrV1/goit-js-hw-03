
function filterArray(numbers, value) {
    let newMas = [];
    for (let index = 0; index < numbers.length; index++) {
        if (numbers[index] > value) {
        newMas.push(numbers[index]);
    }     
    }
    return newMas;

}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
