// Typescript Number
var sumValue = function (a, b) { return a + b; };
// Typescript String
var firstName = "Hutama";
// Typescript Boolean
var isOpen = true;
// Typescript Array
var nameArr = ["Tama", "Eko", "Budi"];
var ageArr = [27, 25, 30];
var isMarriedArr = [false, true, false];
var learnArr = ["React", "Typescript"];
var studentArr = [
    {
        name: "Hutama",
        age: 27
    },
    {
        name: "Eko",
        age: 25
    },
    {
        name: "Budi",
        age: 30
    },
];
// Typescript Object
var student = {
    nim: 201383132,
    name: "hutama"
};
var studentObj = {
    name: "Hutama",
    nim: 201383132,
    learn: ["React", "Typescript"]
};
// Typescript inference
var greetings = "Hello, my name Hutama";
/* ! greetings = 123; */
// Typescript Union
var value = "React Typescript";
value = 77;
var students = [
    {
        nim: 201383132,
        name: "Hutama",
        learn: ["React", "Typescript"]
    },
    {
        nim: 201383132,
        name: "Rahmanto",
        learn: ["React", "Typescript", "Javascript"]
    },
];
// Typescript Function Type Inference
var sumNewValue = function (a, b) { return a + b; };
var newValue = function (value) {
    console.log(value);
};
