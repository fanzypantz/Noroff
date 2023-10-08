//MODULE ASSIGNMENT 2 - LEVEL 1
//1. Create a function that displays prototypal inheritance
var person = {
    age: 20,
    getAge: function() {
        return this.age;
    }
};

console.log(person.age, person);
var secondPerson = Object.create(person);
secondPerson.age = 24;
console.log(secondPerson.age, secondPerson);


//2. Create an array of numbers from 1 - 10; slice the 5th number in the array
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers.slice(4, 5));

//3. Delete the last number in the array that you created above.
numbers.pop();
console.log(numbers);

//4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas: 
var text = "Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.";

var replaceWord = function (textBlock, replace, word) {
    return textBlock.replace(new RegExp(replace, 'gi'), word);
};

text = replaceWord(text, 'strawberry', 'banana');
console.log(text);
text = replaceWord(text, 'strawberries', 'bananas');
console.log(text);

//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.
var teams = ['Arsenal', 'FC Barcelona', 'Start', 'Grane'];

document.querySelector('#button').addEventListener('click', function () {
    teams = [];
    teams = ['BMW', 'Ford', 'Aston Martin', 'Jaguar'];
    console.log(teams);
});

//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.
var people = [
    {
        name: 'Bob',
        age: 23,
        hobby: 'Cars',
    },
    {
        name: 'Bob',
        age: 78,
        hobby: 'Watching twitch streamers',
    },
    {
        name: 'Bean',
        age: 114,
        hobby: 'Smoking',
    },
];

var filteredArray = people.filter(function (person) {
    return person.name === 'Bob';
});

console.log(filteredArray);

//7. Create a simple function that logs the date.
var logDate = function () {
    var date = new Date();
    console.log(date);
};

logDate();
