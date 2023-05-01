// //  1. 
let ages = [3, 9, 23, 64, 2, 8, 28, 93]; 
     console.log(ages);
//  1a.
 let difference = (ages[ages.length- 1] - ages[0]); 
let sum = 0;
// //  1b. Added in 22 at the end and it worked dynamically
// //  1c. loop
 for (let i=0; i < ages.length; i++) {
         sum += ages[i];
 }
 console.log(sum / ages.length)

// //  2. Returns the length of each element
let names =  ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']; 
let lengths = names.map(function(element){
    return element.length
}); 
console.log(lengths);
function calculateAverage(lengths) {
    var total = 0;
    var count = 0;
    lengths.forEach(function(item, index) {
        total += item;
        count++;
    });
    return total / count;
}
console.log(calculateAverage(lengths));

let divLength = `${lengths.length}`
let str = names;
for(let i = 0; i < divLength; i++) {
  console.log(str);
}

// //  3. To access the last element in an array: array [array.length-1]
// //  4. To access first element in an array: array [0]
// //  5. New Array
let nameLengths = [names.length];
console.log(nameLengths);
//6. 
// // 7. 
const mood = 'Hello';
console.log(` ${mood.repeat(3)}`);

// 8.
function fullName (firstName, lastName){
    console.log ('Tom ' + ' Sawyer');
}
fullName ('Tom', 'Sawyer');
//9.   
for (let sum = 0; sum > 100; sum++ ); {
    console.log(true);
}
//10
//This is as far as I got. 