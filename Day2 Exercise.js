// Day 1 excesise

// 1. Write a single line comment which says, comments can make code readable
      //comments can make code readable

// 2. Write another single comment which says, Welcome to learn Javascript
// Welcome to learn Javascript

// 3. Write a multiline comment which says, comments can make code readable, easy to reuse and informative
   /*comments can make code readable, easy to reuse and informative */


   // 4. Create a variable.js file and declare variables and assign string, boolean, undefined and null data types
// string

let a="apple";
// number

let b = 3;
//  boolian

let s = true;
//  undifne

let d
// null
// let f=
// console.log(typeOf(a));


// Day 2 Exercise

var challenge = 'learn Javascript';
console.log(challenge);
console.log(challenge.length);   //16
console.log(challenge.toUpperCase());   //LEARN JAVASCRIPT

console.log(challenge.toLowerCase());  //learn javascript
var slicedPhrase = challenge.substring(6);
console.log(slicedPhrase);                      //javascript
var challenge = 'learn Javascript';

var array = challenge.split(' ');           //(2) ['learn', 'Javascript']
console.log(array);
var challenge = 'learn Javascript';
var array = challenge.split(' ');           //(2) ['learn', 'Javascript']
console.log(array);
var companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
var companiesArray = companiesString.split(', ');
console.log(companiesArray);                         //["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
var challenge = 'learn Javascript';
var newChallenge = challenge.replace('Javascript', '30 Days Of Python');
console.log(newChallenge);                    //learn 30 Days Of Python
var challenge = 'learn Javascript';
var cha = challenge.charAt(15);
console.log(cha);                    //t
var challenge = 'learn Javascript';
var char = challenge.charCodeAt(6);
console.log(char);                       //74
var challenge = 'learn Javascript';
var position = challenge.indexOf('a');
console.log(position);                      //2
var challenge = 'learn Javascript';
var lastPosition = challenge.lastIndexOf('a');
console.log(lastPosition);                 //9
var sentence = 'You cannot end a sentence with because because because is a conjunction';
var positionOfBecause = sentence.indexOf('because');
console.log('Position of the first "because" is at index:', positionOfBecause);
var sentence = 'You cannot end a sentence with because because because is a conjunction';
var lastPositionOfBecause = sentence.lastIndexOf('because');
console.log('Position of the last "because" is at index:', lastPositionOfBecause);
var sentence = 'You cannot end a sentence with because because because is a conjunction';
var positionOfBecause = sentence.search(/\bbecause\b/);
console.log('Position of the first "because" is at index:', positionOfBecause);
var str = ' learn Javascript ';
var trimmedStr = str.trim();
console.log(trimmedStr);
var str = 'learn Javascript';
var result = str.startsWith('learn');
console.log(result); // This will be true
var str = 'learn Javascript';
var result = str.endsWith('Javascript');
console.log(result); // This will be true
var str = 'learn Javascript';
var matches = str.match(/a/g);
console.log(matches);
var firstPart = '30 Days of ';
var secondPart = 'JavaScript';
var mergedString = firstPart.concat(secondPart);
console.log(mergedString);
var str = 'learn Javascript';
var repeatedString = str.repeat(2);
console.log(repeatedString);

