'use strict'

function yourName(){
let namePerson = prompt('What is your name?')
if(namePerson == ''){
    namePerson = prompt('Tell me your name');
}
document.write('Welcome ' + namePerson );
}

function eatIcecream(){
let eatenHere = prompt('How many times have you visited this establishment?');
if(eatenHere > 1){
    document.write('We are happy to have you back!');
} else {
    document.write('We hope your first experience here is as wonderful as our icecream!');
}
}

function howIcecream(){
let howMuchIcecream = prompt('How much icecream have you eaten today from 0-100?');
if(howMuchIcecream < 100){
    document.write('You are at the right place!');
}
}