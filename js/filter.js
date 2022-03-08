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


// function filterNames(name) {
//     if(name.toLowerCase().includes("a")) {
//         return true;
//     }
// }


// arrow function

// const filteredNames = names.filter((name) => name.toLowerCase().includes("a"));

console.log(names);
console.log(filteredNames)


// filter method with objects

const people = [{ id: 1, name: "Alice"}, { id: 2, name: "Anders"}, { id: 3, name: "Mari"}];

const filteredPeople = people.filter(filterPeople);

function filterPeople(person) {

    if(person.name.toLowerCase().startsWith("a")) {
        return true;
    }
}


// noname function 

/* const filteredPeople = people.filter(function(person) {
    if(person.name.toLowerCase().startsWith("m")) {
        return true;
    }
}); */


// Arrow function *dont recommend converting to one line, it becomes unreadable

/* const filteredPeople = people.filter((person) => {
    if(person.name.toLowerCase().startsWith("m")) {
        return true;
    }
}); */

console.table(people);
console.table(filteredPeople)