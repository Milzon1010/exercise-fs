// if (day === 'Saturday' || day === 'Sunday') {
//     console.log('Enjoy the weekend!');
//   } else {
//     console.log('Do some work.');
//   }

// ??latihan modul codeacademy bagaimana menentukan if dalam Boolean

// let mood = 'sleepy';
// let tirednessLevel = 6;

// if (mood === 'sleepy' && tirednessLevel > 8) {
//   console.log('time to sleep');
// } else {
//   console.log('not bed time yet');
// }

// Truthy and Falsy
// let wordCount = 1;

// if (wordCount) {
//   console.log("Great! You've started your work!");
// } else {
//   console.log('Better get to work!');
// }


// let favoritePhrase = '';

// if (favoritePhrase) {
//   console.log("This string doesn't seem to be empty.");
// } else {
//   console.log('This string is definitely empty.');
// }

// Truthy and Falsy Assignment
// Evaluasi kemungkinan yang singkat!
// Katakanlah Anda memiliki situs web dan ingin mengambil 
// nama pengguna pengguna untuk membuat salam yang dipersonalisasi.
// Terkadang, pengguna tidak memiliki akun, 
// membuat variabel nama pengguna menjadi salah
// Kode di bawah ini memeriksa apakah nama pengguna 
// ditentukan dan memberikan string default jika tidak

// let username = '';
// let defaultName;
 
// if (username) {
//   defaultName = username;
// } else {
//   defaultName = 'Stranger';
// }
 
// console.log(defaultName); // Prints: Stranger

// If you combine your knowledge of logical operators 
// you can use a short-hand for the code above. In a boolean condition, 
// JavaScript assigns the truthy value to a variable 
// if you use the || operator in your assignment:
// Because || or statements check the left-hand condition first, 
// the variable defaultName will be assigned 
// the actual value of username if it is truthy,
// and it will be assigned the value of 'Stranger' if username is falsy.
// This concept is also referred to as short-circuit evaluation.


// tool = 'marker';

// // Use short circuit evaluation to assign writingUtensil variable below:
// let writingUtensil = tool || 'pen';

// console.log(`The ${writingUtensil} is mightier than the sword.`);


//Ternary Operator
// sama dengan artinya if then 
// let isNightTime = true;
 
// if (isNightTime) {
//   console.log('Turn on the lights!');
// } else {
//   console.log('Turn off the lights!');
// }

// isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');

// let isLocked = false;

// isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

// let isCorrect = true;

// isCorrect ? console.log('Correct!') : console.log('Incorrect!');

// let favoritePhrase = 'Love That!';

// favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");

//Else If Statements
// We can add more conditions to our if...else with an else if statement
// The else if statement allows for more than two possible outcomes
// You can add as many else if statements as you’d like, to make more complex conditionals!
// The else if statement always comes after the if statement and before the else statement
// The else if statement also takes a condition. Let’s take a look at the syntax:
// let stopLight = 'yellow';
 
// if (stopLight === 'red') {
//   console.log('Stop!');
// } else if (stopLight === 'yellow') {
//   console.log('Slow down.');
// } else if (stopLight === 'green') {
//   console.log('Go!');
// } else {
//   console.log('Caution, unknown!');
// }
// The else if statements allow you to have multiple possible outcomes. if/else if/else statements are read from top to bottom,
// so the first condition that evaluates to true from the top to bottom is the block that gets executed.

// let season = 'summer';

// if (season === 'spring') {
//   console.log('It\'s spring! The trees are budding!');
// } else if(season === 'winter') {
//   console.log('It\'s winter! Everything is covered in snow.');
// } else if(season === 'fall') {
//   console.log('It\'s fall! Leaves are falling!');
// } else if(season === 'summer') {
//   console.log('It\'s sunny and warm because it\'s summer!');
// } else {
//   console.log('Invalid season.');
// }

// The switch keyword
// else if statements are a great tool if we need to check multiple conditions. In programming,
// we often find ourselves needing to check multiple values and handling each of them differently
// For example:
// let groceryItem = 'papaya';
 
// if (groceryItem === 'tomato') {
//   console.log('Tomatoes are $0.49');
// } else if (groceryItem === 'papaya'){
//   console.log('Papayas are $1.29');
// } else {
//   console.log('Invalid item');
// }

// A switch statement provides an alternative syntax that is easier to read and write.

// Contoh:
// let groceryItem = 'papaya';
 
// switch (groceryItem) {
//   case 'tomato':
//     console.log('Tomatoes are $0.49');
//     break;
//   case 'lime':
//     console.log('Limes are $1.49');
//     break;
//   case 'papaya':
//     console.log('Papayas are $1.29');
//     break;
//   default:
//     console.log('Invalid item');
//     break;
// }


// userName = "Milzon";

// userName ? console.log(`Hello, ${userName}!`) : console.log("Hello");

// let userQuestion = "will i eat dinner tonight?";

// console.log(`${userName} has asked - ${userQuestion}`);

// let randomNumber = Math.floor(Math.random() * 8);

// console.log(randomNumber);

// let eightBall = '';

// switch(randomNumber){
//   case 0:
//     eightBall = 'It is certain';
//     break;
//   case 1:
//     eightBall = 'It is decidedly so';
//     break;
//   case 2:
//     eightBall = 'Reply hazy try again';
//     break;
//   case 3:
//     eightBall = 'Cannot predict now';
//     break;
//   case 4:
//     eightBall = 'Do not count on it';
//     break;
//   case 5:
//     eightBall = 'My sources say no';
//     break;
//   case 6:
//     eightBall = 'Outlook not so good';
//     break;
//   case 7:
//     eightBall = 'Signs point to yes';
//     break;
// }

// console.log(`The Magic Ball says, ${eightBall}.`)

// let raceNumber  = Math.floor(Math.random() * 1000);
// let early = true;
// let age = 19;

// if(early && age > 18){raceNumber +- 1000;}

// else if(early && age > 18){
//     console.log(`Race will begin at 9.30, your race number is: ${raceNUmber}.`);
// }

// else if(!early && age > 18){
//     console.log(`Race will begin at 11.00, your race number is: ${raceNUmber}.`);
// }
// else if(age < 18){
//     console.log(`Race will begin at 12.30, your race number is: ${raceNUmber}.`);
// }
// else{
//     console.log(`Please approach the registration desk, thanks!`);
// }





//What are Functions?

// const width = 10;
// const height = 6;
// const area =  width * height;
// console.log(area); // Output: 60

// Area of the first rectangle
// const width1 = 10;
// const height1 = 6;
// const area1 =  width1 * height1;
// console.log(area1);

 
// Area of the second rectangle
// const width2 = 4;
// const height2 = 9;
// const area2 =  width2 * height2;
// console.log(area2);

 
// Area of the third rectangle
// const width3 = 10;
// const height3 = 10;
// const area3 =  width3 * height3;
// console.log(area3);

// Function Declarations
// greetWorld(); // Output: Hello, World!
 
// function greetWorld() {
//   console.log('Hello, World!');
// }

// function getReminder(){
//     console.log('Water the plants');
//   }
  
//   function greetInSpanish(){
//     console.log('Buenas Tardes')
//   }

// function sayThanks() {
//     console.log('Thank you for your purchase! We appreciate your business.');
//   }
  
//   sayThanks();
//   sayThanks();
//   sayThanks();

// function sayThanks(name) {
//     console.log('Thank you for your purchase ' + name + '! We appreciate your business.');
//   }
  
//   sayThanks('Cole');

// function greeting (name = 'stranger') {
//     console.log(`Hello, ${name}!`)
//   }
   
//   greeting('Nick') // Output: Hello, Nick!
//   greeting() // Output: Hello, stranger!
   
// function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
//     console.log(`Remember to buy ${item1}`);
//     console.log(`Remember to buy ${item2}`);
//     console.log(`Remember to buy ${item3}`);
//   }
  
// Return   =======

// function rectangleArea(width, height) {
//     let area = width * height;
//   }
//   console.log(rectangleArea(5, 7)) // Prints undefined

// function rectangleArea(width, height) {
//     if (width < 0 || height < 0) {
//       return 'You need positive integers to calculate area!';
//     }
//     return width * height;
//   }

// function monitorCount(rows, columns) {
//     return rows * columns;
//   }
  
//   const numOfMonitors = monitorCount(5, 4);
  
//   console.log(numOfMonitors);

// Helper Functions ========

// function multiplyByNineFifths(number) {
//     return number * (9/5);
//   };
   
//   function getFahrenheit(celsius) {
//     return multiplyByNineFifths(celsius) + 32;
//   };
   
//   getFahrenheit(15); // Returns 59

//   contoh diatas menjelaskan :
// getFahrenheit() is called and 15 is passed as an argument.
// The code block inside of getFahrenheit() calls multiplyByNineFifths() 
// and passes 15 as an argument.

// multiplyByNineFifths() takes the argument of 15 for the number parameter.

// The code block inside of multiplyByNineFifths() 
// function multiplies 15 by (9/5), which evaluates to 27.

// 27 is returned back to the function call in getFahrenheit().
// getFahrenheit() continues to execute. 
// It adds 32 to 27, which evaluates to 59.
// Finally, 59 is returned back to the function call getFahrenheit(15).

// function monitorCount(rows, columns) {
//     return rows * columns;
//   }
  
//   function costOfMonitors(rows, columns) {
//    return monitorCount(rows, columns)  * 200;
//   }
  
//   const totalCost = costOfMonitors(5, 4);
  
//   console.log(totalCost);

//   Function Expressions

    // adalah fungsi yang disimpan ke dalam suatu variable. 
    // Setelah disimpan, maka variabel tersebut dapat digunakan sebagai fungsi.

// const plantNeedsWater = function(day) {
//     if(day === 'Wednesday'){
//       return true;
//     } else {
//       return false;
//     }
//   };
  
//   plantNeedsWater('Tuesday');
  
//   console.log(plantNeedsWater('Tuesday'));


// Arrow Functions

// const rectangleArea = (width, height) => {
//     let area = width * height;
//     return area;
//   };

//   const plantNeedsWater = (day) => {
//     if (day === 'Wednesday') {
//       return true;
//     } else {
//       return false;
//     }
//   };

// Concise Body Arrow Functions

// So if we have a function:

// const squareNum = (num) => {
//     return num * num;
//   };

// We can refactor the function to:

// const squareNum = num => num * num;

// const plantNeedsWater = (day) => {
//     return day === 'Wednesday' ? true : false;
//   };


// const plantNeedsWater = day => day === 'Wednesday' ? true : false;

// Blocks and Scope

// const logSkyColor = () => {
//     let color = 'blue'; 
//     console.log(color); // blue 
//   }

// if (dusk) {
//     let color = 'pink';
//     console.log(color); //pink
//   }

// const city = 'New York City';

// const logCitySkyline = () => {
//   let skyscraper = 'Empire State Building';
//   return 'The stars over the ' + skyscraper + ' in ' + city;
// };

// console.log(logCitySkyline());


// Global Scope

// const color = 'blue';
 
// const returnSkyColor = () => {
//   return color; // blue 
// };
 
// console.log(returnSkyColor()); // blue

// const satellite = 'The Moon';
// const galaxy = 'The Milky Way';
// const stars = 'North Star';

// const callMyNightSky = () => {
// 	return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
// };

// console.log(callMyNightSky());


// Block Scope =========

// const logSkyColor = () => {
//     let color = 'blue'; 
//     console.log(color); // blue 
//   };
   
//   logSkyColor(); // blue 
//   console.log(color); // ReferenceError

// const logVisibleLightWaves = () => {
//     const lightWaves = 'Moonlight';
//     console.log(lightWaves);
//   };
  
//   logVisibleLightWaves();
  
//   // console.log(lightWaves);


// Scope Pollution ==========

// let num = 50;
 
// const logNum = () => {
//   num = 100; // Take note of this line of code
//   console.log(num);
// };
 
// logNum(); // Prints 100
// console.log(num); // Prints 100

// const satellite = 'The Moon';
// const galaxy = 'The Milky Way';
// let stars = 'North Star';

// const callMyNightSky = () => {
//   stars = 'Sirius';
// 	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
// };

// console.log(callMyNightSky());
// console.log(stars);


// Practice Good Scoping ============

// const logSkyColor = () => {
//     const dusk = true;
//     let color = 'blue'; 
//     if (dusk) {
//       let color = 'pink';
//       console.log(color); // pink
//     }
//     console.log(color); // blue 
//   };
   
//   console.log(color); // ReferenceError

// const logVisibleLightWaves = () => {
//     let lightWaves = 'Moonlight';
//       let region = 'The Arctic';
//     // Add if statement here:
//     if (region === 'The Arctic'){
//       let lightWaves = 'Northern Lights';
//       console.log(lightWaves);
//     }
    
//     console.log(lightWaves);
//   };
  
//   logVisibleLightWaves();


// Create an Array ======

// let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];

// const hobbies = ['kayaking', 'snowboarding', 'napping'];
// console.log(hobbies);


// Accessing Elements =======

// const hello = 'Hello World';
// console.log(hello[6]);
// // Output: W

// individual elements in arrays can also be stored to variables.

// const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

// const listItem = famousSayings[0];

// console.log(famousSayings[2]);

// console.log(famousSayings[3]);


//Update Elements =====

// let seasons = ['Winter', 'Spring', 'Summer', 'Fall'];
 
// seasons[3] = 'Autumn';
// console.log(seasons); 
// //Output: ['Winter', 'Spring', 'Summer', 'Autumn']

// In the example above, 
// the seasons array contained the names of the four seasons.
// However, we decided that we preferred to say 'Autumn' instead of 'Fall'.
// The line, seasons[3] = 'Autumn'; 
// tells our program to change the item at index 3 of the seasons array 
// to be 'Autumn' instead of what is already there.

// let groceryList = ['bread', 'tomatoes', 'milk'];

// groceryList[1]  = 'avocados';

// Arrays with let and const ======

// let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

// const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

// condiments[0] = 'Mayo';

// console.log(condiments);

// condiments = ['Mayo'];

// console.log(condiments);

// utensils[3] = 'Spoon';

// console.log(utensils);


// The .length property =======

// const newYearsResolutions = ['Keep a journal', 'Take a falconry class'];
 
// console.log(newYearsResolutions.length);
// // Output: 2

// const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];

// console.log(objectives.length);

// The .push() Method ========

// const itemTracker = ['item 0', 'item 1', 'item 2'];
 
// itemTracker.push('item 3', 'item 4');
 
// console.log(itemTracker); 
// // Output: ['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];

// const chores = ['wash dishes', 'do laundry', 'take out trash'];

// chores.push('cook dinner', 'mop floor');

// console.log(chores);


//The .pop() Method ========

    // const newItemTracker = ['item 0', 'item 1', 'item 2'];
    
    // const removed = newItemTracker.pop();
    
    // console.log(newItemTracker); 
    // // Output: [ 'item 0', 'item 1' ]
    // console.log(removed);
    // // Output: item 2

    // const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];

    // chores.pop();

    // console.log(chores)


// More Array Methods =========


    // const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

    // groceryList.shift();

    // console.log(groceryList);

    // groceryList.unshift('popcorn');

    // console.log(groceryList);

    // console.log(groceryList.slice(1, 4));

    // console.log(groceryList);

    // const pastaIndex = groceryList.indexOf('pasta');

    // console.log(pastaIndex);


// Arrays and Functions ==========

// const flowers = ['peony', 'daffodil', 'marigold'];
 
// function addFlower(arr) {
//   arr.push('lily');
// }
 
// addFlower(flowers);
 
// console.log(flowers); // Output: ['peony', 'daffodil', 'marigold', 'lily']


    // const concept = ['arrays', 'can', 'be', 'mutated'];

    // function changeArr(arr){
    //   arr[3] = 'MUTATED';
    // }

    // changeArr(concept);

    // console.log(concept);

    // const removeElement = newArr => {
    //   newArr.pop()
    // }

    // removeElement(concept);

    // console.log(concept);


    
// Nested Arrays ======

// const nestedArr = [[1], [2, 3]];
 
// console.log(nestedArr[1]); // Output: [2, 3]

// const nestedArr = [[1], [2, 3]];
 
// console.log(nestedArr[1]); // Output: [2, 3]
// console.log(nestedArr[1][0]); // Output: 2

// const numberClusters = [[1, 2], [3, 4], [5, 6]];

// const target = numberClusters[2][1];


// Repeating Tasks Manually ====

// const vacationSpots = ['Mozambique', 'Thailand', 'Bolivia'];

// console.log(vacationSpots[0]);
// console.log(vacationSpots[1]);
// console.log(vacationSpots[2]);


// The For Loop
// menyederhanakan array yang banyak

// for (let counter = 0; counter < 4; counter++) {
//     console.log(counter);
//   }

//   for (let counter = 5; counter < 11; counter++) {
//     console.log(counter);
//   }

  
// Looping in Reverse

// for (let counter = 0; counter < 4; counter++){
//     console.log(counter);
//   }

// balikanlah menjadi hitungan terbalik, dari 3,2,1,0
// yang diatas dari bawah keatas

// for (let counter = 3; counter >= 0; counter--){
//     console.log(counter);
//   }
  
  
// Looping through Arrays =========

// const animals = ['Grizzly Bear', 'Sloth', 'Sea Lion'];
// for (let i = 0; i < animals.length; i++){
//   console.log(animals[i]);
// }

// Remember that arrays are zero-indexed, 
// the index of the last element of an array is equivalent to the length of that array minus 1.
// If we tried to access an element at the index of animals.
// length we will have gone too far!

// With for loops, it’s easier for us to work with elements in arrays.

    // const vacationSpots = ['Bali', 'Paris', 'Tulum'];

    // // Write your code below
    // for (let i = 0; i < vacationSpots.length; i++ ){
    //   console.log('I would love to visit ' + vacationSpots[i]);
    // }


    
// Nested Loops =====

    // const myArray = [6, 19, 20];
    // const yourArray = [19, 81, 2];
    // for (let i = 0; i < myArray.length; i++) {
    //   for (let j = 0; j < yourArray.length; j++) {
    //     if (myArray[i] === yourArray[j]) {
    //       console.log('Both arrays have the number: ' + yourArray[j]);
    //     }
    //   }
    // }

// // Write your code below
// let bobsFollowers = ['Joe', 'Marta', 'Sam', 'Erin'];
// let tinasFollowers = ['Sam', 'Marta', 'Elle'];
// let mutualFollowers = [];

// for (let i = 0; i < bobsFollowers.length; i++) {
//   for (let j = 0; j < tinasFollowers.length; j++) {
//     if (bobsFollowers[i] === tinasFollowers[j]) {
//       mutualFollowers.push(bobsFollowers[i]);
//     }
//   }
// };

// The While Loop =====

// A for loop that prints 1, 2, and 3
    // for (let counterOne = 1; counterOne < 4; counterOne++){
    //     console.log(counterOne);
    //   }
    
    //   // A while loop that prints 1, 2, and 3
    //   let counterTwo = 1;
    //   while (counterTwo < 4) {
    //     console.log(counterTwo);
    //     counterTwo++;
    //   }
   
// const cards = ['diamond', 'spade', 'heart', 'club'];

// // Write your code below
// let currentCard;

// while ( currentCard != 'spade') {
//   currentCard = cards[Math.floor(Math.random() * 4)];
// 	console.log(currentCard);
// }

// Do...While Statements =====


    // let countString = '';
    // let i = 0;
    
    // do {
    //   countString = countString + i;
    //   i++;
    // } while (i < 5);
    
    // console.log(countString);

// const firstMessage = 'I will print!';
// const secondMessage = 'I will not print!'; 
 
// A do while with a stopping condition that evaluates to false
// do {
//  console.log(firstMessage)
// } while (true === false);
 
// // A while loop with a stopping condition that evaluates to false
// while (true === false){
//   console.log(secondMessage)
// };

// we want to add at least one cup of sugar to the batter 
// even if the value of cupsOfSugarNeeded is 0

    // let cupsOfSugarNeeded = 3;
    // let cupsAdded = 0;

    // do {
    //  cupsAdded++
    //  console.log(cupsAdded + ' cup was added') 
    // } while (cupsAdded < cupsOfSugarNeeded);


// The break Keyword =================================
// untuk stop looping
// for (let i = 0; i < 99; i++) {
//     if (i > 2 ) {
//        break;
//     }
//     console.log('Banana.');
//   }
   
//   console.log('Orange you glad I broke out the loop!');

    // const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

    // // Write your code below
    // for (let i = 0; i < rapperArray.length; i++){
    //   console.log(rapperArray[i]);
    //   if (rapperArray[i] === 'Notorious B.I.G.'){
    //     break;
    //   }
    // }

    // console.log("And if you don't know, now you know.");


// Functions as Data =======
// apabila lupa dengan perintah atau command
// maka bisa dipaka (.name)



    // const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    //     for(let i = 1; i <= 1000000; i++) {
    //       if ( (2 + 2) != 4) {
    //         console.log('Something has gone very wrong :( ');
    //       }
    //     }
    //   };
    
         //   short dari perintah diatas.

    //   const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes
    
    //   isTwoPlusTwo();

        // panggila variable check diatas.
    //   console.log(isTwoPlusTwo.name)


// Functions as Parameters ========

    // const higherOrderFunc = param => {
    //     param();
    //     return `I just invoked ${param.name} as a callback function!`
    //   }
    
    //   const anotherFunc = () => {
    //     return 'I\'m being invoked by the higher-order function!';
    //   }
    
    //   higherOrderFunc(anotherFunc);

    // higherOrderFunc(() => {
    //   for (let i = 0; i <= 10; i++){
    // //     console.log(i);
    // //   }
    // });

// A higher-order function is a function that either accepts functions as parameters, 
// returns a function, or both!

// const addTwo = num => {
//        return num + 4;
//   }
  
//   const checkConsistentOutput = (func, val) => {
//     let checkA = val + 4;
//     let checkB = func(val);
//     return checkA === checkB ? func(val) : 'inconsistent results';  
//   }
  
// // console.log(checkConsistentOutput(addTwo, 10));

// // Introduction to Iterators

// const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

// artists.forEach(artist => {
// // console.log(artist + ' is one of my favorite artists.');
//  });

// const numbers = [1, 2, 3, 4, 5];

// const squareNumbers = numbers.map(number => {
//   return number * number;
// });

// // console.log(squareNumbers);

// const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

// const onlyNumbers = things.filter(thing => {
//   return typeof thing === 'number';
// });

// // console.log(onlyNumbers);


// // The .forEach() Method


// const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
// fruits.forEach(fruit => console.log(`I want to eat a ${fruit}.`))

// const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// // Create the secretMessage array below
// const secretMessage = animals.map(animal => animal[0]);

// // console.log(secretMessage.join(''));

// const bigNumbers = [100, 200, 300, 400, 500];

// // Create the smallNumbers array below
// const smallNumbers = bigNumbers.map(num => num/100);


// The .filter() Method

// const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 
 
// const shortWords = words.filter(word => {
//   return word.length < 6;
// });

// console.log(words); 
// Output: ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 
// console.log(shortWords); 
// Output: ['chair', 'music', 'brick', 'pen', 'door']

// const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// // Call .filter() on randomNumbers below
// const smallNumbers = randomNumbers.filter(function(randomNumbers) {
//   if (randomNumbers < 250) {
//     return true;
//   }
// })

// Hasil sama ddengan diatas :


// const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
// Call the .filter() method on randomNumbers to return values that are less than 250
// Save them to a new array called smallNumbers, declared with const.

// const smallNumbers = randomNumbers.filter(num => {
//   return num < 250;
// })

// const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below

// work with an array of strings. Invoke .filter()
// on the favoriteWords array to return elements that have more than 7 characters.
// Save the returned array to a const variable named longFavoriteWords.

// const longFavoriteWords = favoriteWords.filter(word => {
//   return word.length > 7;
// })

// // The .findIndex() Method

// const jumbledNums = [123, 25, 78, 5, 9]; 
 
// const lessThanTen = jumbledNums.findIndex(num => {
//   return num < 10;
// });

// jumbledNums is an array that contains elements that are numbers.
// const lessThanTen = declares a new variable that 
// stores the returned index number from invoking .findIndex().
// The callback function is an arrow function that has a single parameter, num. 
// Each element in the jumbledNums array will be passed to this function as an argument.
// num < 10; is the condition that elements are checked against. .findIndex()
// will return the index of the first element which evaluates to true for that condition.

// console.log(lessThanTen);
// console.log(jumbledNums[3]);

// If there isn’t a single element in the array that satisfies the condition in the callback
// then .findIndex() will return -1.

// const greaterThan1000 = jumbledNums.findIndex(num => {
//     return num > 1000;
//   });
   
//   console.log(greaterThan1000);



// FindIndex

// const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

// invoke .findIndex() on the animals array to find the index of the element 
// that has the value 'elephant'
// and save the returned value to a const variable named foundAnimal.


// const foundAnimal = animals.findIndex(animal => {
//   return animal === 'elephant';
// });

// Let’s see if we can find the index of the first animal that starts with the letter 's'.
// Call .findIndex() on the animals array and return the index
    // of the first element that starts with 's'
// Assign the returned value to a const variable named  .

// const startsWithS = animals.findIndex(animal => {
//     return animal[0] === 's' ? true : false;
//   });



//   The .reduce() Method

// Another widely used iteration method is .reduce(). 
// The .reduce() method returns a single value after iterating through the elements of an array
// thereby reducing the array

// const numbers = [1, 2, 4, 10];
 
// const summedNums = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue
// })
 
// console.log(summedNums)

// Here are the values of accumulator and currentValue
// as we iterate through the numbers array:

// iteration	accumulator	currentValue	return value
// First	1	2	3
// Second	3	4	7
// Third	7	10	17

// numbers is an array that contains numbers.
// summedNums is a variable that stores the returned value of invoking .reduce() on numbers.
// numbers.reduce() calls the .reduce() method on the numbers array and takes in a callback function as argument.
// The callback function has two parameters, accumulator and currentValue
// The value of accumulator starts off as the value of the first element in the array and the currentValue
// starts as the second element. To see the value of accumulator and currentValue change, review the chart above.
// As .reduce() iterates through the array, the return value of the callback function becomes the accumulator value for the next iteration,
// currentValue takes on the value of the current element in the looping process.

// The .reduce() method can also take an optional second parameter to set an initial value for accumulator

// const numbers = [1, 2, 4, 10];
 
// const summedNums = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue
// }, 100)  // <- Second argument for .reduce()
 
// console.log(summedNums); // Output: 117

// Here’s an updated chart that accounts for the second argument of 100:

// Iteration #	accumulator	currentValue	return value
// First	100	1	101
// Second	101	2	103
// Third	103	4	107
// Fourth	107	10	117


// Let’s practice calling .reduce() 
// and using console.log() to check the values as .reduce() iterates through the array.
// In main.js, there is an array of numbers, newNumbers.

// const newSum = newNumbers.reduce('') => {
  
// }

const newNumbers = [1, 3, 5, 7];

// Provide .reduce with an argument of a callback function. 
// The callback function has two parameters
// The first parameter is accumulator and the second parameter is currentValue
// Use either a function expression or an arrow function.

// const newSum = newNumbers.reduce((accumulator, currentValue) => {
//   console.log('The value of accumulator: ', accumulator);
//   console.log('The value of currentValue: ', currentValue);
//   return accumulator + currentValue;
// }, 10);

// console.log(newSum);


// Iterator Documentation

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

// console.log(words.some(word => {
//   return word.length < 6;
// }));

// Use filter to create a new array
// The .some() method returned true, 
// which means there are some words in the array that are shorter than six characters
// Use the .filter() method 
// to save any words longer than 5 characters to a new variable called interestingWords
// declared with const.

// We’ve used .filter() in a previous exercise, but, 
// for more information browsehttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Iteration_methodsn on .filter() .


// Make sure to uncomment the code below and fix the incorrect code before running it

// console.log(interestingWords.every((word) => { } ));

const interestingWords = words.filter((word) => {return word.length > 5});


// Make sure to uncomment the code below and fix the incorrect code before running it

// console.log(interestingWords.every((word) => {return word.length > 5}));



// Choose the Right Iterator

// const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

// const nums = [1, 50, 75, 200, 350, 525, 1000];

// //  Choose a method that will return undefined
// cities.forEach(city => console.log('Have you visited ' + city + '?'));

// // Choose a method that will return a new array
// const longCities = cities.filter(city => city.length > 7);

// // Choose a method that will return a single value
// const word = cities.reduce((acc, currVal) => {
//   return acc + currVal[0]
// }, "C");

// console.log(word)

// // Choose a method that will return a new array
// const smallerNums = nums.map(num => num - 5);

// // Choose a method that will return a boolean value
// nums.every(num => num < 0);
// // OR nums.some(num => num < 0);


// Creating Object Literals

// let spaceship = {}; // spaceship is an empty object

// // An object literal with two key-value pairs
// let spaceship = {
//     'Fuel Type': 'diesel',
//     color: 'silver'
//   };

//   The spaceship object has two properties Fuel Type and color
// 'Fuel Type' has quotation marks because it contains a space character.
// The spaceship we have so far looks good but, unfortunately, 
// is not very fast at hyperspace travel due to having an inferior fuel source
// Make a new spaceship object named fasterShip with 
// the same color as spaceship but with a Fuel Type equal to 'Turbo Fuel'.

// let fasterShip = {
//     'Fuel Type': 'Turbo Fuel',
//     color: 'silver'
//   };




//   ccessing Properties

// There are two ways we can access an object’s property. 
// Let’s explore the first way— dot notation, ..

// 'hello'.length; // Returns 5

// let spaceship = {
//     homePlanet: 'Earth',
//     color: 'silver'
//   };
//   spaceship.homePlanet; // Returns 'Earth',
//   spaceship.color; // Returns 'silver',

//   spaceship.favoriteIcecream; // Returns undefined

//   Let’s use the dot operator to access the value of numCrew 
//   from the spaceship object in the code editor.
// Create a variable crewCount and assign the spaceship‘s numCrew property to it.

// let spaceship = {
//     homePlanet: 'Earth',
//     color: 'silver',
//     'Fuel Type': 'Turbo Fuel',
//     numCrew: 5,
//     flightPath: ['Venus', 'Mars', 'Saturn']
//   };
  
  // Write your code below
  
//   let crewCount = spaceship.numCrew;

//   Again using the dot operator, 
//   create a variable planetArray and assign the spaceship‘s flightPath property to it.

// let planetArray = spaceship.flightPath;


// Bracket Notation

// The second way to access a key’s value is by using bracket notation, [ ].

// ['A', 'B', 'C'][0]; // Returns 'A'

// let spaceship = {
//     'Fuel Type': 'Turbo Fuel',
//     'Active Duty': true,
//     homePlanet: 'Earth',
//     numCrew: 5
//   };
//   spaceship['Active Duty'];   // Returns true
//   spaceship['Fuel Type'];   // Returns  'Turbo Fuel'
//   spaceship['numCrew'];   // Returns 5
//   spaceship['!!!!!!!!!!!!!!!'];   // Returns undefined

//   With bracket notation you can also use
//   a variable inside the brackets to select the keys of an object
// This can be especially helpful when working with functions:

// let returnAnyProp = (objectName, propName) => objectName[propName];
 
// returnAnyProp(spaceship, 'homePlanet'); // Returns 'Earth'

// if we tried to write our returnAnyProp() function with dot notation (objectName.propName)
// the computer would look for a key of 'propName' on our object and not the value of the propName parameter.

// let spaceship = {
//     'Fuel Type' : 'Turbo Fuel',
//     'Active Mission' : true,
//     homePlanet : 'Earth', 
//     numCrew: 5
//    };
  
//   let propName =  'Active Mission';

//   Let’s use bracket notation to access the value of 'Active Mission' 
//   from the spaceship object in the code editor.
// Create a variable isActive and assign the spaceship‘s 'Active Mission' property to it.
  
  // Write your code below
  
//   let isActive = spaceship['Active Mission'];

//   sing bracket notation and the propName variable provided, console.log()
//   the value of the 'Active Mission' property.

//   console.log(spaceship[propName]);

// Property Assignment
// Once we’ve defined an object, we’re not stuck with all the properties we wrote.
// Objects are mutable meaning we can update them after we create them!
// We can use either dot notation, ., or bracket notation, [], and the assignment operator
// = to add new key-value pairs to an object or change an existing property.

// One of two things can happen with property assignment:

// If the property already exists on the object, 
// whatever value it held before will be replaced with the newly assigned value.

// If there was no property with that name, a new property will be added to the object.


// const spaceship = {type: 'shuttle'};
// spaceship = {type: 'alien'}; // TypeError: Assignment to constant variable.
// spaceship.type = 'alien'; // Changes the value of the type property
// spaceship.speed = 'Mach 5'; // Creates a new key of 'speed' with a value of 'Mach 5'

// You can delete a property from an object with the delete operator.

// const spaceship = {
//     'Fuel Type': 'Turbo Fuel',
//     homePlanet: 'Earth',
//     mission: 'Explore the universe' 
//   };
   
//   delete spaceship.mission;  // Removes the mission property


//   let spaceship = {
//     'Fuel Type' : 'Turbo Fuel',
//     homePlanet : 'Earth',
//     color: 'silver',
//     'Secret Mission' : 'Discover life outside of Earth.'
//   };
  
//   // Write your code below
// //   Reassign the color property of the spaceship object to have a value of 'glorious gold'
  
//   spaceship.color = 'glorious gold';

// //   Without changing lines 1366 - 1371, 
// //   add a numEngines property with a numeric value between 1 and 10 to the spaceship object.
  
//   spaceship.numEngines = 9;
  
//   delete spaceship['Secret Mission'];

//   Methods

// When the data stored on an object is a function we call that a method.
// A property is what an object has, while a method is what an object does.

// Do object methods seem familiar? That’s because you’ve been using them all along! 
// For example console is a global javascript object and .log() is a method on that object
// Math is also a global javascript object and .floor() is a method on it.


// We can include methods in our object literals by creating ordinary, comma-separated key-value pairs.
// The key serves as our method’s name, while the value is an anonymous function expression.

// const alienShip = {
//     invade: function () { 
//       console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
//     }
//   };

//   With the new method syntax introduced in ES6 we can omit the colon and the function keyword.

// const alienShip = {
//     invade () { 
//       console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
//     }
//   };


// Below the retreatMessage variable in the code editor, create an alienShip object
// It should contain a method .retreat() which will console.log() the retreatMessage.

// let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// // Write your code below

// let alienShip = {
//     retreat() {
//       console.log(retreatMessage)
//     },
//     takeOff() {
//       console.log('Spim... Borp... Glix... Blastoff!')
//     }
//   };
  
//   alienShip.retreat();
  
//   alienShip.takeOff();
  

//   Nested Objects

// In application code, objects are often nested— an object
// might have another object as a property which in turn could have a property
// that’s an array of even more objects!

// const spaceship = {
//     telescope: {
//        yearBuilt: 2018,
//        model: '91031-XLT',
//        focalLength: 2032 
//     },
//    crew: {
//        captain: { 
//            name: 'Sandra', 
//            degree: 'Computer Engineering', 
//            encourageTeam() { console.log('We got this!') } 
//         }
//    },
//    engine: {
//        model: 'Nimbus2000'
//     },
//     nanoelectronics: {
//         computer: {
//            terabytes: 100,
//            monitors: 'HD'
//         },
//        'back-up': {
//           battery: 'Lithium',
//           terabytes: 50
//         }
//    }
// }; 

// We can chain operators to access nested properties.
// We’ll have to pay attention to which operator makes sense to use in each layer.
// It can be helpful to pretend you are the computer and evaluate each expression
// from left to right so that each operation starts to feel a little more manageable.

// spaceship.nanoelectronics['back-up'].battery; // Returns 'Lithium'

// First the computer evaluates spaceship.nanoelectronics, 
// which results in an object containing the back-up and computer objects.

// We accessed the back-up object by appending ['back-up'].

// The back-up object has a battery property, 
// accessed with .battery which returned the value stored there: 'Lithium'

// let spaceship = {
//     passengers: null,
//     telescope: {
//       yearBuilt: 2018,
//       model: "91031-XLT",
//       focalLength: 2032 
//     },
//     crew: {
//       captain: { 
//         name: 'Sandra', 
//         degree: 'Computer Engineering', 
//         encourageTeam() { console.log('We got this!') },
//        'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
//     },
//     engine: {
//       model: "Nimbus2000"
//     },
//     nanoelectronics: {
//       computer: {
//         terabytes: 100,
//         monitors: "HD"
//       };
//       'back-up': {
//         battery: "Lithium",
//         terabytes: 50
//       }
//     }
//   }; 
  
//   Create a variable capFave and assign the captain‘s favorite food 
// (the element in the 0th index of her 'favorite foods' array) to it
// Make sure to use bracket and dot notation to get the value of the food
// through nested access (don’t just copy the value into the variable!)

// let spaceship = {
//     passengers: [{name: 'Space Dog'}], 
//     telescope: {
//       yearBuilt: 2018,
//       model: "91031-XLT",
//       focalLength: 2032 
//     },
//     crew: {
//       captain: { 
//         name: 'Sandra', 
//         degree: 'Computer Engineering', 
//         encourageTeam() { console.log('We got this!') },
//        'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
//     },
//     engine: {
//       model: "Nimbus2000"
//     },
//     nanoelectronics: {
//       computer: {
//         terabytes: 100,
//         monitors: "HD"
//       },
//       'back-up': {
//         battery: "Lithium",
//         terabytes: 50
//       }
//     }
//   }; 
  
//   let capFave = spaceship.crew.captain['favorite foods'][0];
  
//   let firstPassenger = spaceship.passengers[0];

//   console.log(capFave);
//   console.log(firstPassenger);


  
// Pass By Reference
// Objects are passed by reference. 
// This means when we pass a variable assigned to an object into a function as an argumen
// the computer interprets the parameter name as pointing to the space in memory holding that object

// const spaceship = {
//   homePlanet : 'Earth',
//   color : 'silver'
// };
 
// let paintIt = obj => {
//   obj.color = 'glorious gold'
// };
 
// paintIt(spaceship);
 
// spaceship.color // Returns 'glorious gold'
 
// Our function paintIt() permanently changed the color of our spaceship object
// However, reassignment of the spaceship variable wouldn’t work in the same way:

let spaceship = {
  homePlanet : 'Earth',
  color : 'red'
};
let tryReassignment = obj => {
  obj = {
    identified : false, 
    'transport type' : 'flying'
  }
  console.log(obj) // Prints {'identified': false, 'transport type': 'flying'}
 
};
tryReassignment(spaceship) // The attempt at reassignment does not work.
spaceship // Still returns {homePlanet : 'Earth', color : 'red'};
 
spaceship = {
  identified : false, 
  'transport type': 'flying'
}; // Regular reassignment still works.

// We declared this spaceship object with let
// This allowed us to reassign it to a new object with identified and 'transport type' properties with no problems.

// When we tried the same thing using a function designed to reassign the object passed into it
// the reassignment didn’t stick (even though calling console.log() on the object produced the expected result).

// When we passed spaceship into that function, obj became a reference to the memory location of the spaceship object
// but not to the spaceship variable. This is because the obj parameter of the tryReassignment() function is
// a variable in its own right. The body of tryReassignment() has no knowledge of the spaceship variable at all!

// When we did the reassignment in the body of tryReassignment(), the obj variable came to refer to the memory location of the object
// {'identified' : false, 'transport type' : 'flying'}, while the spaceship variable was completely unchanged from its earlier value.



// let spaceship = {
//   'Fuel Type' : 'Turbo Fuel',
//   homePlanet : 'Earth'
// };

// // Write your code below
// // Write a function greenEnergy() that has an object as a parameter and sets
// // that object’s 'Fuel Type' property to 'avocado oil'.

// let greenEnergy = obj => {
//   obj['Fuel Type'] = 'avocado oil';
// }

// let remotelyDisable = obj => {
//   obj.disabled = true;
// }

// greenEnergy(spaceship);

// remotelyDisable(spaceship);

// console.log(spaceship)


// Looping Through Objects
// Loops are programming tools that repeat a block of code until a condition is met
// We learned how to iterate through arrays using their numerical indexing, 
// but the key-value pairs in objects aren’t ordered!

// let spaceship = {
//   crew: {
//   captain: { 
//       name: 'Lily', 
//       degree: 'Computer Engineering', 
//       cheerTeam() { console.log('You got this!') } 
//       },
//   'chief officer': { 
//       name: 'Dan', 
//       degree: 'Aerospace Engineering', 
//       agree() { console.log('I agree, captain!') } 
//       },
//   medic: { 
//       name: 'Clementine', 
//       degree: 'Physics', 
//       announce() { console.log(`Jets on!`) } },
//   translator: {
//       name: 'Shauna', 
//       degree: 'Conservation Science', 
//       powerFuel() { console.log('The tank is full!') } 
//       }
//   }
// }; 

// // Write your code below

// for (let crewMember in spaceship.crew) {
// console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`)
// };

// for (let crewMember in spaceship.crew) {
// console.log(`${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`)
// };


// Advanced Objects Introduction