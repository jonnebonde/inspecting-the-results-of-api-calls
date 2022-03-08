// filter function


// filter with nunmbers



const numbers = [1, 3, 6, 8, 10, 13, 16,];

// greater than 9

/* const filteredNumbers = numbers.filter(filterNumbers);

function filterNumbers(number) {
    if(number > 2) {
        return true;
    }

}

console.log(numbers);
console.log(filteredNumbers) */


// get even numbers with named function

/* const filteredNumbers = numbers.filter(filterNumbers);

function filterNumbers(number) {
    if(number % 2 === 0) {
        return true;
    }

} */

// or written this way with anonynom/nameless function //

/* const filteredNumbers = numbers.filter(function(number) {
    if(number % 2 === 0) {
        return true;
     }
}); */

// arrow function

const filteredNumbers = numbers.filter((number) => number % 2 === 0);



console.log(numbers);
console.log(filteredNumbers)



// filter with strings


const names  = ["Alice", "Anders", "Ben",  "Mari", "Marie", "Xander"];

const filteredNames = names.filter(filterNames);

function filterNames(name) {
    if(name.startsWith("A")) {
        return true
    }
}

console.log(names);
console.log(filteredNames)