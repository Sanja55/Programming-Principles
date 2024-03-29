/**1. Write a functional expression that duplicates each element of a given array.

Input: [2, 4, 7, 11, -2, 1]
Output: [2, 2, 4, 4, 7, 7, 11, 11, -2, -2, 1, 1] */

function duplicateEachElementOfTheArray(array) {

    var newArray = []; 

    for (var i = 0; i < array.length; i++) {

        newArray.push(array[i]);

        newArray.push(array[i]);
    
    }

    return newArray;
    
}

var duplicate = duplicateEachElementOfTheArray([2, 4, 7, 11, -2, 1]);

console.log(duplicate);


/**2. Write a functional expression that removes all duplicates in a given array.
Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
Output: [1, 4, 8, 9, 12, 13] */

function removeAllDuplicatesFromTheArray (array) {

    var newArray = [];

    for (var i = 0; i < array.length; i++) {

        if(newArray.indexOf(array[i]) === -1) {

            newArray.push(array[i]);
        }
    }
    
    return newArray.sort(function (a, b) {

        return a - b;
        
        })
}

var removeDuplicates =  removeAllDuplicatesFromTheArray ([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]);

console.log(removeDuplicates);


/**3.
a. Write a function that checks if a given array has odd number of elements.
Input: [1, 2, 9, 2, 1]
Output: true */

function checkIfTheArrayHasOddNumberOfElements (array) {

    if (array.length % 2 !== 0) {

        return true;
    
    } else {

        return false;
    }
}

var oddNumberOfElements = checkIfTheArrayHasOddNumberOfElements ([1, 2, 9, 2, 1]);

console.log(oddNumberOfElements);

/*b. Write a function that counts the number of elements less than the middle
element. If the given array has an even number of elements, print out an error
message.
Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
Output: 4*/

function countTheNumberOfElementsLessThanTheMiddleElement (array) {

    var elementCounter = 0;

    if (array.length % 2 === 0) {

        return "Error!"
    
    } else {

        var middleElement = Math.ceil(array.length / 2);

        for (var i = 0; i < array.length; i++) {

            if (array[i] < middleElement) {

                elementCounter++;
            }
        }

    }

    return elementCounter;

}

var elementsLessThanTheMiddleElement = countTheNumberOfElementsLessThanTheMiddleElement ([-1, 8.1, 3, 6, 2.3, 44, 2.11]);

console.log(elementsLessThanTheMiddleElement);

/*4. Write a function that finds the smallest element of a given array. The function should
return an object that contains the smallest value and its last position in the array.
Input: [1, 4, -2, 11, 8, 1, -2, 3]
Output: { minValue: -2, minLastIndex: 6 }*/

function findTheSmallestElementOfTheArray (array) {

    var theSmallestElement = array[0];

    for (var i = 0; i < array.length; i++) {

        if (theSmallestElement > array[i]) {

            theSmallestElement = array[i];
        
        }
    
    }

    return {minValue: theSmallestElement, minLastIndex: array.lastIndexOf(theSmallestElement)};
    
}

var theSmallestAndTheLastIndex = findTheSmallestElementOfTheArray ([1, 4, -2, 11, 8, 1, -2, 3]);

console.log(theSmallestAndTheLastIndex);


/**5.
a. Write a function that finds all the elements in a given array less than a given
element.
Input: [2, 3, 8, -2, 11, 4], 6
Output: [2, 3, -2, 4]*/

function findAllTheElementsLessThanAGiven (array, elementToCompareWith) {

    newArray = [];

    for (var i = 0; i < array.length; i++) {

        if (array[i] < elementToCompareWith) {

            newArray.push(array[i]);
        }
    }

    return newArray;

}

var elementsLessThanAGiven = findAllTheElementsLessThanAGiven ([2, 3, 8, -2, 11, 4], 6);

console.log(elementsLessThanAGiven);


/**b. Write a function that finds all the elements in a given array that start with the “pro”
substring. The function should be case insensitive.
Input: [’JavaScript’, ’Programming’, ’fun’, ’product’]
Output: [’Programming’, ‘product’] */

function findElementsStartWithThePro(array) {

    var lowerCase = array.map( function (e) {

        return e.toLowerCase();
        
    });
    
    var elementsContainingPro = lowerCase.filter(function (e) {

        return e.includes("pro")
        
    });

    return elementsContainingPro;
    
}

var findPro = findElementsStartWithThePro (["JavaScript", "Programming", "fun", "product"]);

console.log(findPro);


/**c. Write a function that expects an array and a callback function that filters out
some of the elements. Use functions defined in a) or b) to test it.*/

/**6.
a. Write a list (array) of products you usually buy in the supermarket. Write a price
and name for each product. For example,
[

{name: ‘apples’, price: 100},
{name: ‘milk’, price: 80},
{name:’bananas’, price: 150}
]*/

var shoppingList = [

    {name: "Chocolate", price: 150},

    {name: "Potatoes", price: 100},

    {name: "Avocado", price: 160},

    {name: "Yogurt", price: 200},

]

/**b. Write a function that calculates the total price of your shopping list. */

function calculateAltogether (shoppingList) {

    var sumOfProducts = 0;

    for (var i = 0; i < shoppingList.length; i++) {

        sumOfProducts = sumOfProducts + shoppingList[i].price;

    }

    return sumOfProducts;

}

var billToPay = calculateAltogether([

    {name: "Chocolate", price: 150},

    {name: "Potatoes", price: 100},

    {name: "Avocado", price: 160},

    {name: "Yogurt", price: 200},

]);

console.log(billToPay);


/**c. Write a function that calculates the average product price of your shopping list.
Print this value with the precision of three decimals. */

function calculateTheAveragePrice (shoppingList) {
    
    var sumOfProductPrices = 0

    var averagePrice = 0;

    for (var i = 0; i < shoppingList.length; i++) {

        sumOfProductPrices += shoppingList[i].price;

        averagePrice = sumOfProductPrices / shoppingList.length;
    }

    return averagePrice.toFixed(3);
}
  
var averagePriceOfProducts = calculateTheAveragePrice ([

    {name: "Chocolate", price: 150},

    {name: "Potatoes", price: 100},

    {name: "Avocado", price: 160},

    {name: "Yogurt", price: 200},

]);

console.log(averagePriceOfProducts);


/**d. Write a function that prints out the name of the most expensive product on your
shopping list. Write the name in uppercase.*/

function printTheMostExpensiveProduct (shoppingList) {

    var theMostExpensive = 0;

    for (var i = 0; i < shoppingList.length; i++) {

        theMostExpensive = Math.max(shoppingList[i].price);

    }

    var theMostExpensiveProduct = shoppingList.find((element) => element.price === theMostExpensive);
    
    return theMostExpensiveProduct.name.toUpperCase();

   
    
}

var theMostExpensiveProductName = printTheMostExpensiveProduct ([

    {name: "Chocolate", price: 150},

    {name: "Potatoes", price: 100},

    {name: "Avocado", price: 160},

    {name: "Yogurt", price: 200},

]);

console.log(theMostExpensiveProductName);


/**7.
a. Write a function that checks if a given string is written in all capitals.*/
  
function checkForAllCapitals(string) {

    if(string.toUpperCase() === string) {

        return true;
    
    } else {

        return false;
    }
    
}

var stringContainsAllCapitals = checkForAllCapitals ("SANJA RandjELOVic");

console.log(stringContainsAllCapitals);


//b. Write a function that checks if a given string contains any digits.

function checkForDigits (string) {
  
    for (var i = 0; i < string.length; i++) {
        
        var element = string[i];
        
        var parsed = parseInt(element);
        
        if (!isNaN(parsed)) {

            return true;
        } 
    }

    return false;

}

var anyDigits = checkForDigits ("Da nas.1");

console.log(anyDigits);


//c. Write a function that checks if a given string is a valid hexadecimal color.

//proveri da li je # na prvom mestu
//da li je input length = 7
//a-f i 0-9

function checkIfStringIsValidHexColor (string) {

    if (string[0] !== "#" && string.length !== 7) {

        throw new Error ("Invalid input. Try Again!");
    }

   for (var i = 0; i < 7; i++) {

        var character = string[i];

        if ((character >= "0" || character <= "9") && 
        
            (character >= "A" || character <= "F" || character >= "a" || character <= "f")) {

            return true;
        }
   }

   return false;

}

var isStringValidHexColor = checkIfStringIsValidHexColor ("#af33ff");

console.log(isStringValidHexColor);

/**d. Write a function that checks if a given number belongs to the interval from 1900
to 2018.*/

function checkIfNumberIsInRange (number) {

    if (number > 1900 && number < 2018) {

        return true;
    
    } else {

        return false;
    }
} 

var inRange = checkIfNumberIsInRange (1993);

console.log(inRange);

/**e. Write a function named validator that returns an object with properties
stringValidator, passwordValidator, colorValidator, and yearValidator referencing
the functions from a) to d). */

function Validator (string, password, color, year) {

    this.stringValidator = checkForAllCapitals(string);
    this.passwordValidator = checkForDigits(password);
    this.colorValidator = checkIfStringIsValidHexColor(color);
    this.yearValidator = checkIfNumberIsInRange(year);

}

var validation = new Validator ("SANJA", "Da nas.1", "#AF3FF", 1993);

console.log(validation);


/**8. Write a function that calculates a number of days to your birthday.

Input: 25 February
Output: 5 days */


function countTheDaysTillBirthday (currentDate, birthday) {

    var currentDate = new Date();

    var birthday = new Date("6/19/2023");

    var differenceBetweenDates = birthday.getTime() - currentDate.getTime();

    var daysLeftTillBirthday = Math.ceil(differenceBetweenDates / (1000 * 3600 * 24));

    return daysLeftTillBirthday;

}

console.log(countTheDaysTillBirthday());

/**9. Write a function that for a given departure and arrival time calculates the time the trip
takes.
Input: 8:22:13 11:43:22
Output: 3 hours 21 minutes 9 seconds*/

function calculateTripDuration (departureTime, arrivalTime) {

    var departureTime = new Date()
    
}


//11. a. Write a function that generates a random integer value between 5 and 20.

function generateRandom (min, max) {

    var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}
var generatedRandomNumber = generateRandom(5, 20);
console.log(generatedRandomNumber);


//b. Write a function that generates a random integer value between 50 and 100.

function generateTheNumber () {
    
    var minimum = 50;
    var maximum = 100
    var randomIneger = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    
    return randomIneger;
}
var generatedInteger = generateTheNumber (50, 100);
console.log(generatedInteger);

/*c. Write a function which expects a number and a callback generator function and
returns an array of numbers produced by the generator function. */

function generateTheArray(number, callback) {

    var array = [];

    for (var i = 0; i < number; i++) {
        array.push(Math.floor(Math.random() * number));
    }
    return array
}
var generatedArray = generateTheArray(10, function (element) {return element * 2;})
console.log(generatedArray);



/**12. Write a function that shuffles the elements of a given array.

Input: [3, 6, 11, 2, 9, 1] */

function shuffleTheArray (array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
var shuffledArray = shuffleTheArray ([3, 6, 11, 2, 9, 1])
console.log(shuffledArray);