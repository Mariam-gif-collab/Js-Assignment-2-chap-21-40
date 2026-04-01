// ///////////CHAP 21-25 ///////////
//  task 1 ////////

// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");
// var fullName = firstName + " " + lastName;
// alert("Hello, " + fullName + "!");

//  task 2 ////////
// var phoneModel = prompt("Enter your favorite mobile phone model:");

// var lengthOfInput = phoneModel.length;
// document.writeln("My Favourite Phone is :" + phoneModel + "<br>")
// document.writeln("The length of your input is: " + lengthOfInput);

//  task 3 ////////
// var word = "Pakistani";
// var index = word.indexOf("n");
// document.writeln("String :" + word + "<br>")
// document.writeln("Index of 'n' in 'Pakistani' is: " + index);

//  task 4 ////////
// var word = "Hello World";
// var lastIndex = word.lastIndexOf("l");
// document.writeln("String :" + word + "<br>")
// document.writeln("Last index of 'l' in 'Hello World' is: " + lastIndex);

//  task 5 ////////
// var word = "Pakistani";
// var charAtIndex3 = word.charAt(3);
// document.writeln("String :" + word + "<br>")

// document.writeln("Character at index 3 in 'Pakistani' is: " + charAtIndex3);

//  task 6 ////////
// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");
// var fullName = firstName + " " + lastName;
// alert("Hello, " + fullName + "!");

//  task 7 ////////
// var city = "Hyderabad";
// var newCity = city.replace("Hyder", "Islam");
// document.writeln("City :" + city + "<br>")
// document.writeln("After replacement: " + newCity);

//  task 8 ////////
// var message = ("Ali and Sami are best friends. They play cricket and football together.");
// var newMsg = message.replace(/and/gi, "&");
// document.writeln(newMsg);

//  task 9 ////////
// var str = "472";
// var num = Number(str);

// document.writeln("Value: " + str + " | Type: " + typeof str + "<br>");
// document.writeln("Value: " + num + " | Type: " + typeof num);

//  task 10 ////////
// var userInput = prompt("Enter some text:");
// var upperCaseInput = userInput.toUpperCase();
// document.writeln("Uppercase version: " + upperCaseInput);

//  task 11 ////////
// var userInput = prompt("Enter a word:");

// var firstLetter = userInput.slice(0,1).toUpperCase();
// var remainingLetters = userInput.slice(1).toLowerCase();

// var titleCase = firstLetter + remainingLetters;

// document.writeln("User input: " + userInput + "<br>");
// document.writeln("Title case: " + titleCase);
//  task 12 ////////

// var num = 35.36;

// var numString = num.toString();     // convert number to string
// var result = numString.replace(".", "");  // remove dot

// document.writeln("Number: " + num + "<br>");
// document.writeln("Result: " + result);

//   task 13//////////////

// var username = prompt("Enter your username:");

// for (var i = 0; i < username.length; i++) {
//     var code = username.charCodeAt(i);

//     if (code === 33 || code === 44 || code === 46 || code === 64) {
//         alert("Please enter a valid username");
//         break;
//     }
// }
//   task 14//////////////

// let items = ["cake","applepie", "cookie", "chips","patties"];
// let resp1 = prompt("Enter your order");
// let ans1 = resp1.toLowerCase();
// for (let i = 0; i < items.length; i++) {

// if(ans1 === items[i]){
//     document.writeln(`${ans1} is availablable at index ${items.indexOf(ans1)} in our bakery`);
//     break;
// }
// else{document.writeln(`We are sorry. ${ans1} is not available in our bakery`);
// break;
// }};

//  task 15//////////////
// var password = prompt("Enter your password:");

// var hasAlphabet = false;
// var hasNumber = false;

// var firstCharCode = password.charCodeAt(0);
// if (firstCharCode >= 48 && firstCharCode <= 57) {
//     alert("Password should not start with a number");
// }
// else if (password.length < 6) {
//     alert("Password must be at least 6 characters long");
// }
// else {
//     for (var i = 0; i < password.length; i++) {
//         var code = password.charCodeAt(i);

//         if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
//             hasAlphabet = true;
//         }

//         else if (code >= 48 && code <= 57) {
//             hasNumber = true;
//         }
//     }

//     if (hasAlphabet && hasNumber) {
//         alert("Valid Password ");
//     } else {
//         alert("Please enter a valid password");
//     }
// }
//
//  task 16//////////////
// var university = "University of Karachi";
// var chars = university.split("");
// for (var i = 0; i < chars.length; i++) {
//     document.writeln(chars[i] + "<br>");
// }
//  task 17//////////////
// var userInput = prompt("Enter a string:");
// var lastChar = userInput.charAt(userInput.length - 1);
// document.writeln("User input: " + userInput + "<br>");
// document.writeln("Last character: " + lastChar);

// task 18//////////////
// var text = "The quick brown fox jumps over the lazy dog";
// var wordToCount = "the";
// var regex = new RegExp(wordToCount, "gi");
// var matches = text.match(regex);
// var count = matches ? matches.length : 0;
// document.writeln("Text: " + text + "<br>");
// document.writeln("There are " + count + " occurrence(s) of the word '" + wordToCount + "' in the given text.");

// ////////////////////CHAP 26-30 ///////////
// task 1//////////////
// var num = parseFloat(prompt("Enter a positive integer:"));
// var roundedNum = Math.round(num);
// var floorNum = Math.floor(num);
// var ceilNum = Math.ceil(num);
// document.writeln("Number: " + num + "<br>");
// document.writeln("Rounded value: " + roundedNum + "<br>");
// document.writeln("Floor value: " + floorNum + "<br>");
// document.writeln("Ceil value: " + ceilNum);

// task 2//////////////
// var num = parseFloat(prompt("Enter a negative floating-point number:"));
// var roundedNum = Math.round(num);
// var floorNum = Math.floor(num);
// var ceilNum = Math.ceil(num);
// document.writeln("Number: " + num + "<br>");
// document.writeln("Rounded value: " + roundedNum + "<br>");
// document.writeln("Floor value: " + floorNum + "<br>");
// document.writeln("Ceil value: " + ceilNum);

// task 3//////////////
// var num = parseFloat(prompt("Enter a number:"));
// var absValue = Math.abs(num);
// document.writeln("Number: " + num + "<br>");
// document.writeln("Absolute value: " + absValue);

// task 4//////////////
// var randomNum = Math.random();
// var diceRoll = Math.floor(randomNum * 6) + 1;
// document.writeln("Random dice value: " + diceRoll);

// task 5//////////////
// var randomNum = Math.random();
// var coinFlip = Math.floor(randomNum * 2) + 1;
// var result = coinFlip === 1 ? "Heads" : "Tails";
// document.writeln("Random coin value: " + result);

// task 6//////////////
// var randomNum = Math.random();
// var randomValue = Math.floor(randomNum * 100) + 1;
// document.writeln("Random number between 1 and 100: " + randomValue);

// task 7//////////////
// var userWeight = prompt("Enter your weight in kilograms:");
// var weightInKg = parseFloat(userWeight);
// document.writeln("The weight of user is " + weightInKg + " kilograms");

// task 8//////////////
// var secretNumber = Math.floor(Math.random() * 10) + 1;
// var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));
// if (userGuess === secretNumber) {
//     document.writeln("Congratulations! You guessed the secret number.");
// } else {
//     document.writeln("Sorry, the secret number was " + secretNumber + ". Try again!");
// };

// ////////////////////CHAP 31-34 ///////////
// task 1//////////////
// var currentDate = new Date();
// document.writeln("Current date and time: " + currentDate);

// task 2//////////////
// var currentDate = new Date();
// var currentMonth = currentDate.getMonth();
// var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// document.writeln("Current month: " + monthNames[currentMonth]);

// task 3//////////////
// var currentDate = new Date();
// var currentDay = currentDate.getDay();
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// document.writeln("Today is: " + dayNames[currentDay]);

// task 4//////////////
// var currentDate = new Date();
// var currentDay = currentDate.getDay();
// if (currentDay === 0 || currentDay === 6) {
//     document.writeln("It's a fun day");
// } else {
//     document.writeln("It's a working day");
// }

// task 5//////////////
// var currentDate = new Date();
// var currentDateNum = currentDate.getDate();
// if (currentDateNum < 16) {
//     document.writeln("First fifteen days of the month");
// } else {
//     document.writeln("Last days of the month");
// };

// task 6//////////////
// var currentDate = new Date();
// var currentTime = currentDate.getTime();
// var minutesSinceEpoch = Math.floor(currentTime / (1000 * 60));
// document.writeln("Current date: " + currentDate + "<br>");
// document.writeln("Elapsed milliseconds since January 1, 1970: " + currentTime + "<br>");
// document.writeln("Elapsed minutes since January 1, 1970: " + minutesSinceEpoch);

// task 7//////////////
// var currentDate = new Date();
// var currentHour = currentDate.getHours();
// if (currentHour < 12) {
//     document.writeln("It's AM");
// } else {
//     document.writeln("It's PM");
// };

// task 8//////////////
// var laterDate = new Date(2020, 11, 31);
// document.writeln("Later date: " + laterDate);

// task 9//////////////
// var ramadanStartDate = new Date(2020, 3, 24);
// var currentDate = new Date();
// var timeDiff = currentDate.getTime() - ramadanStartDate.getTime();
// var daysSinceRamadanStart = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
// document.writeln(daysSinceRamadanStart + " days have passed since the start of Ramadan");

// task 10//////////////
// var referenceDate = new Date(2015, 0, 1);
// var currentDate = new Date();
// var timeDiff = currentDate.getTime() - referenceDate.getTime();
// var secondsSinceReference = Math.floor(timeDiff / 1000);
// document.writeln("On reference date " + referenceDate + "<br>");
// document.writeln(secondsSinceReference + " seconds had passed since the beginning of 2015");

// task 11//////////////
// var birthdate = new Date(prompt("Enter your birthdate (YYYY-MM-DD):"));
// var currentDate = new Date();
// var ageInMiliSeconds = currentDate.getTime() - birthdate.getTime();
// var ageInYears = Math.floor(ageInMiliSeconds / (1000 * 60 * 60 * 24 * 365.25));
// document.writeln("Your age is: " + ageInYears + " years");

// task 12//////////////
// let currentDate = new Date();
// let another100YearBack = new Date(currentDate.getFullYear() - 100, currentDate.getMonth(), currentDate.getDate());
// document.writeln("Current date: " + currentDate + "<br>");
// document.writeln("100 years back, it was: " + another100YearBack);

// task 13//////////////
// var currentDate = new Date();
// var currentYear = currentDate.getFullYear();
// var birthYear = parseInt(prompt("Enter your birth year:"));
// var age = currentYear - birthYear;
// document.writeln("Your current age is: " + age + "<br>");
// document.writeln("Your birth year is: " + birthYear);

// task 14 //////////////
// var currentDate = new Date();
// var currentYear = currentDate.getFullYear();
// var currentMonth = currentDate.getMonth() + 1;
// var currentDay = currentDate.getDate();
// var unitsConsumed = parseFloat(prompt("Enter the number of units consumed:"));
// var chargePerUnit = 16;
// var netAmountPayable = unitsConsumed * chargePerUnit;
// var latePaymentSurcharge = 350;
// var grossAmountPayable = netAmountPayable + latePaymentSurcharge;
// document.writeln("Customer Name: ABC Customer<br>");
// document.writeln("Month: " + currentMonth + "<br>");
// document.writeln("Number of units: " + unitsConsumed + "<br>");
// document.writeln("Charges per unit: " + chargePerUnit + "<br><br>");
// document.writeln("Net Amount Payable (within Due Date): " + netAmountPayable.toFixed(2) + "<br>");
// document.writeln("Late Payment Surcharge: " + latePaymentSurcharge.toFixed(2) + "<br>");
// document.writeln("Gross Amount Payable (after Due Date): " + grossAmountPayable.toFixed(2) + "<br>");



// ////////////////////CHAP 35-38 ///////////
// task 1//////////////
// function displayCurrentDateTime() {
//     var currentDate = new Date();
//     document.writeln("Current date and time: " + currentDate);
// }
// displayCurrentDateTime();

// task 2//////////////
// function greetUser(firstName, lastName) {
//     var fullName = firstName + " " + lastName;
//     alert("Hello, " + fullName + "!");
// }
// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");
// greetUser(firstName, lastName);

// task 3//////////////
// function addNumbers(num1, num2) {
//     return num1 + num2;
// }
// var number1 = parseFloat(prompt("Enter the first number:"));
// var number2 = parseFloat(prompt("Enter the second number:"));
// var sum = addNumbers(number1, number2);
// document.writeln("The sum of " + number1 + " and " + number2 + " is: " + sum);

// task 4//////////////
// function calculator(num1, num2, operator) {
//     var result;
//     switch (operator) {
//         case "+":
//             result = num1 + num2;
//             break;
//         case "-":
//             result = num1 - num2;
//             break;
//         case "*":
//             result = num1 * num2;
//             break;
//         case "/":
//             result = num1 / num2;
//             break;
//         case "%":
//             result = num1 % num2;
//             break;
//     }
//     return result;
// }
// var number1 = parseFloat(prompt("Enter the first number:"));
// var number2 = parseFloat(prompt("Enter the second number:"));
// var operator = prompt("Enter the operator (+, -, *, /, %):");
// var result = calculator(number1, number2, operator);
// document.writeln("The result of " + number1 + " " + operator + " " + number2 + " is: " + result);

// task 5//////////////
// function square(num){
//     return num * num;
// }
// let number = parseFloat(prompt("Enter a number to find its square:"));
// let squareValue = square(number);
// document.writeln("The square of " + number + " is: " + squareValue);

// task 6//////////////
// function factorial(num) {
//     if (num === 0 || num === 1) {
//         return 1;
//     } else {
//         return num * factorial(num - 1);
//     }
// }
// let number = parseInt(prompt("Enter a number to find its factorial:"));
// let factorialValue = factorial(number);
// document.writeln("The factorial of " + number + " is: " + factorialValue);

// task 7//////////////
// function countNumbers(start, end) {
//     document.writeln("Counting from " + start + " to " + end + ":<br>");
//     for (var i = start; i <= end; i++) {
//         document.writeln(i + "<br>");
//     }
// }
// var startNum = parseInt(prompt("Enter the starting number:"));
// var endNum = parseInt(prompt("Enter the ending number:"));
// countNumbers(startNum, endNum);

// task 8//////////////
// function calculateHypotenuse(base, perpendicular) {
//     function calculateSquare(num) {
//         return num * num;
//     }
//     var baseSquare = calculateSquare(base);
//     var perpendicularSquare = calculateSquare(perpendicular);
//     var hypotenuseSquare = baseSquare + perpendicularSquare;
//     return Math.sqrt(hypotenuseSquare);
// }
// var base = parseFloat(prompt("Enter the base of the right-angled triangle:"));
// var perpendicular = parseFloat(prompt("Enter the perpendicular of the right-angled triangle:"));
// var hypotenuse = calculateHypotenuse(base, perpendicular);
// document.writeln("The hypotenuse of the right-angled triangle is: " + hypotenuse.toFixed(2));    

// task 9//////////////
// function calculateArea(width, height) {
//     return width * height;
// }
// let width = parseFloat(prompt("Enter the width of the rectangle:"));
// let height = parseFloat(prompt("Enter the height of the rectangle:"));
// let area = calculateArea(width, height);
// document.writeln("The area of the rectangle is: " + area);

// task 10//////////////
// function isPalindrome(str) {
//     var cleanedStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase(); 
//     var reversedStr = cleanedStr.split("").reverse().join("");
//     return cleanedStr === reversedStr;
// }
// var userInput = prompt("Enter a string to check if it's a palindrome:");
// var isPalin = isPalindrome(userInput);
// document.writeln("Is '" + userInput + "' a palindrome? " + isPalin);

// ///////task 11//////
// function capitalizeWords(str) {
//   let words = str.split(" ");
//   let result = [];
//   for (let i = 0; i < words.length; i++) {
//     let word = words[i];
//     let capitalized = word.charAt(0).toUpperCase() + word.slice(1);
//     result.push(capitalized);
//   }
//   return result.join(" ");
// }
// console.log(capitalizeWords("the quick brown fox"));

// task 12//////////////
// function findLongestWord(str) {
//     let words = str.split(" ");
//     let longestWord = ""; 
//     for (let i = 0; i < words.length; i++) {
//         if (words[i].length > longestWord.length) {
//             longestWord = words[i];
//         }
//     }
//     return longestWord;
// }
// let userInput = prompt("Enter a string to find the longest word:");
// let longest = findLongestWord(userInput);
// document.writeln("The longest word in the string is: " + longest);

// task 13//////////////
// function countOccurrences(str, letter) {
//     let count = 0;  
//     for (let i = 0; i < str.length; i++) {
//         if (str.charAt(i).toLowerCase() === letter.toLowerCase()) {
//             count++;
//         }
//     }
//     return count;
// }
// let userInput = prompt("Enter a string:");
// let letterToCount = prompt("Enter a letter to count its occurrences:");
// let occurrences = countOccurrences(userInput, letterToCount);
// document.writeln("The letter '" + letterToCount + "' occurs " + occurrences + " times in the string.");

// task 14//////////////
// function calcCircumfrence(radius){
//   let circumfrence = 2 * Math.PI * radius;
//   return circumfrence;

// }
// function calcArea (radius){let area = Math.PI * radius * radius;
//   return area;
// }
// let radius = parseFloat(prompt("Enter the radius of the circle:"));
// let circumfrence = calcCircumfrence(radius);
// let area = calcArea(radius);
// document.writeln("the circumfrence of the circle is :" + circumfrence.toFixed(2)+ );
// document.writeln("the area of the circle is :" + area.toFixed(2) );


// chap 38-42 ///////////
// task 1//////////////
// function power(base, exponent) {
//     return Math.pow(base, exponent);
// }
// let base = parseFloat(prompt("Enter the base number:"));
// let exponent = parseFloat(prompt("Enter the exponent:"));
// let result = power(base, exponent);
// document.writeln(base + " raised to the power of " + exponent + " is: " + result);


// task 2//////////////
// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//         return true;
//     } else {
//         return false;
//     }
// }
// let year = parseInt(prompt("Enter a year:"));
// let isLeap = isLeapYear(year);
// document.writeln(year + " is " + (isLeap ? "" : "not ") + "a leap year.");

// task 3//////////////
// function calculateS(a, b, c) {
//     return (a + b + c) / 2;
// }
// function calculateArea(a, b, c) {
//     let s = calculateS(a, b, c);
//     return Math.sqrt(s * (s - a) * (s - b) * (s - c));
// }
// let a = parseFloat(prompt("Enter the first side of the triangle:"));
// let b = parseFloat(prompt("Enter the second side of the triangle:"));
// let c = parseFloat(prompt("Enter the third side of the triangle:"));
// let area = calculateArea(a, b, c);
// document.writeln("The area of the triangle is: " + area.toFixed(2));

// task 4//////////////
// function calculatePercentage(marksObtained, totalMarks) {
//     let percentage = (marksObtained / totalMarks) * 100;
//     return percentage;
// }
// function calculateAverage(marksObtained, totalMarks) {
//     let average = marksObtained / totalMarks;
//     return average;
// }

// function calculateGrade(percentage) {
//     let grade;
//     if (percentage >= 90) {
//         grade = "A+";
//     } else if (percentage >= 80) {
//         grade = "A";
//     }
//     else if (percentage >= 70) {
//         grade = "B";
//     }
//     else if (percentage >= 60) {
//         grade = "C";
//     } 
//     else if (percentage >= 50) {
//         grade = "D";
//     }
//     else {
//         grade = "F";
//     }
//     return grade;
// }
// let marksObtained = parseFloat(prompt("Enter the marks obtained:"));  
// let totalMarks = parseFloat(prompt("Enter the total marks:"));
// let percentage = calculatePercentage(marksObtained, totalMarks);
// let average = calculateAverage(marksObtained, totalMarks);
// let grade = calculateGrade(percentage);
// document.writeln("Marks Obtained: " + marksObtained + "<br>");
// document.writeln("Total Marks: " + totalMarks + "<br>");
// document.writeln("Percentage: " + percentage.toFixed(2) + "%<br>");
// document.writeln("Average: " + average.toFixed(2) + "<br>");
// document.writeln("Grade: " + grade);


// task 5//////////////
// function findIndexOfCharacter(str, char) {
//     for (let i = 0; i < str.length; i++) {
//         if (str.charAt(i) === char) {
//             return i;
//         }
//     }
//     return -1;
// }
// let userInput = prompt("Enter a string:");
// let charToFind = prompt("Enter a character to find its index:");
// let index = findIndexOfCharacter(userInput, charToFind);
// if (index !== -1) {
//     document.writeln("The index of '" + charToFind + "' in the string is: " + index);
// } else {
//     document.writeln("Character '" + charToFind + "' not found in the string.");
// } 

// task 6//////////////
// function removeVowels(str) {
//     return str.replace(/[aeiouAEIOU]/g, '');
// }
// let userInput = prompt("Enter a string:");
// let result = removeVowels(userInput);
// document.writeln("The string without vowels is: " + result);

// task 7//////////////
// function findOccurrences(str, letter) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {        if (str.charAt(i).toLowerCase() === letter.toLowerCase()) {
//             count++;
//         }
//     }
//     return count;
// }   
// let userInput = prompt("Enter a string:");
// let letterToCount = prompt("Enter a letter to count its occurrences:");
// let occurrences = findOccurrences(userInput, letterToCount);
// document.writeln("The letter '" + letterToCount + "' occurs " + occurrences + " times in the string.");

// task 8//////////////
// let distance = parseFloat(prompt("Enter the distance between two cities in kilometers:"));
// function convertToMeters(km) {
//     return km * 1000;
// }
// function convertToFeet(km) {
//     return km * 3280.84;
// }
// function convertToInches(km) {
//     return km * 39370.1;
// }
// function convertToCentimeters(km) {
//     return km * 100000;
// }
// let distanceInMeters = convertToMeters(distance);
// let distanceInFeet = convertToFeet(distance);
// let distanceInInches = convertToInches(distance);
// let distanceInCentimeters = convertToCentimeters(distance);
// document.writeln("Distance in kilometers: " + distance + " km<br>");
// document.writeln("Distance in meters: " + distanceInMeters + " m<br>");
// document.writeln("Distance in feet: " + distanceInFeet.toFixed(2) + " ft<br>");
// document.writeln("Distance in inches: " + distanceInInches.toFixed(2) + " in<br>");
// document.writeln("Distance in centimeters: " + distanceInCentimeters + " cm<br>");

// task 9//////////////
// function calculateOvertimePay(hoursWorked) {
//     let overtimeHours = hoursWorked - 40;
//     if (overtimeHours > 0) {
//         return overtimeHours * 12;
//     } else {
//         return 0;
//     }
// }
// let hoursWorked = parseFloat(prompt("Enter the number of hours worked:"));
// let overtimePay = calculateOvertimePay(hoursWorked);
// document.writeln("Overtime pay: " + overtimePay.toFixed(2) + " currency units");


// task 10//////////////
// function calculateCurrencyNotes(amount) {
//     let notes100 = Math.floor(amount / 100);    amount = amount % 100;
//     let notes50 = Math.floor(amount / 50);      amount = amount % 50;
//     let notes10 = Math.floor(amount / 10);      amount = amount % 10;
//     return {
//         notes100: notes100,
//         notes50: notes50,
//         notes10: notes10
//     };
// }
// let amount = parseInt(prompt("Enter the amount to withdraw:"));
// let notes = calculateCurrencyNotes(amount);
// document.writeln("You will receive:<br>");
// document.writeln(notes.notes100 + " hundred notes<br>");
// document.writeln(notes.notes50 + " fifty notes<br>");
// document.writeln(notes.notes10 + " ten notes<br>");



