//below example of the most basic solution

document.write('Hello, my name is John Smith and my favorite color is red<br>');
document.write('Hello, my name is Alan Walker and my favorite color is blue<br>');
console.log('Hello, my name is John Smith and my favorite color is red');
console.log('Hello, my name is Alan Walker and my favorite color is blue');

//a little more handy

function person(name, favColor) {
    document.write('<p>Hello, my name is ' + name + ' and my favorite color is ' + favColor + '.</p>');
    console.log('Hello, my name is ' + name + ' and my favorite color is ' + favColor + '.');
}

person('John Smith', 'red');
person('Alan Walker', 'blue');

// another solution with var

function person(name, favColor) {
    document.write('<p>Hello, my name is ' + name + ' and my favorite color is ' + favColor + '.</p>');
    console.log('Hello, my name is ' + name + ' and my favorite color is ' + favColor + '.');
}

var johnName = "John Smith";
var  johnFavColor ="red";

person(johnName, johnFavColor);
person('Alan Walker', 'blue');