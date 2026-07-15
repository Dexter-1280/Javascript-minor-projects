// let and const
const college = "RBU";
let semester = 3;

semester++;

console.log(college);
console.log(semester);





// Template Literals
const name = "Aditya";

console.log(`Hello ${name}, Welcome to ${college}`);

// Arrow Function
const square = num => num * num;

console.log(square(5));

// Default Parameters
const greet = (user = "Guest") => {
    console.log(`Welcome ${user}`);
};

greet();
greet("Rahul");

// Rest Operator
const sum = (...numbers) => {
    return numbers.reduce((total, num) => total + num, 0);
};

console.log(sum(10, 20, 30, 40));

// Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];

console.log(arr2);

// Object Destructuring
const student = {
    name: "Aditya",
    age: 20,
    city: "Nagpur"
};

const { name: studentName, age } = student;

console.log(studentName);
console.log(age);

// Array Destructuring
const colors = ["Red", "Green", "Blue"];

const [first, second] = colors;

console.log(first);
console.log(second);

// Enhanced Object Literals
const language = "JavaScript";

const developer = {
    studentName,
    language
};

console.log(developer);

// for...of
const fruits = ["Apple", "Banana", "Mango"];

for (const fruit of fruits) {
    console.log(fruit);
}

// Map
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(num => num * 2);

console.log(doubled);

// Filter
const even = numbers.filter(num => num % 2 === 0);

console.log(even);

// Find
const found = numbers.find(num => num > 3);

console.log(found);

// forEach
numbers.forEach(num => console.log(num));

// Promise
const promise = new Promise((resolve, reject) => {
    resolve("Promise Resolved");
});

promise.then(result => console.log(result));

// Async Await
const getData = async () => {
    return "Learning ES6";
};

const display = async () => {
    const result = await getData();
    console.log(result);
};

display();

// Classes
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`My name is ${this.name}`);
    }
}

const s1 = new Student("Aditya", 20);

s1.introduce();