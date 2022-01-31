/**
 *    FileName:  A5.js
 *  Assignment:  JavaScript Document for assignment: A5
 *      Course:  CIT 152
 *  Instructor:  Dr. Brodersen
 *
 *      Author:  Alexies Farinas | ALEXIES.FARINAS@student.csn.edu
 *        Date:  3/9/2021
 *     Version:  1.5
 *
 * Description: Describe the purpose of this JavaScript file
 *
 */

var ConvertGrade = document.getElementById("Grade");
var gradeData = document.getElementById("gradeData");

function getGrade() {
    if (ConvertGrade.style.display === "none") {
        ConvertGrade.style.display = "block";
    } else {
        ConvertGrade.style.display = "none";
    }
}

function gradeConverter(gradeData) {
    if (gradeData >= 94 && gradeData <= 100) {
        document.getElementById("gradeLetter").innerHTML = "A";
    } else if (gradeData < 94 && gradeData >= 90) {
        document.getElementById("gradeLetter").innerHTML = "A-";
    } else if (gradeData < 90 && gradeData >= 87) {
        document.getElementById("gradeLetter").innerHTML = "B+";
    } else if (gradeData < 87 && gradeData >= 84) {
        document.getElementById("gradeLetter").innerHTML = "B";
    } else if (gradeData < 84 && gradeData >= 80) {
        document.getElementById("gradeLetter").innerHTML = "B-";
    } else if (gradeData < 80 && gradeData >= 77) {
        document.getElementById("gradeLetter").innerHTML = "C+";
    } else if (gradeData < 77 && gradeData >= 74) {
        document.getElementById("gradeLetter").innerHTML = "C";
    } else if (gradeData < 74 && gradeData >= 70) {
        document.getElementById("gradeLetter").innerHTML = "C-";
    } else if (gradeData < 70 && gradeData >= 67) {
        document.getElementById("gradeLetter").innerHTML = "D+";
    } else if (gradeData < 67 && gradeData >= 64) {
        document.getElementById("gradeLetter").innerHTML = "D";
    } else if (gradeData < 64 && gradeData >= 60) {
        document.getElementById("gradeLetter").innerHTML = "D-";
    } else if (gradeData <= 60 && gradeData >= 0) {
        document.getElementById("gradeLetter").innerHTML = "F";
    } else {
        document.getElementById("gradeLetter").innerHTML = "Invalid input."
    }
}

// Creating a innerHTML for Webpage Heading
var header = document.getElementById("heading").innerHTML = "<h1>CIT 152 JavaScript Programming</h1>";

// Creating a innerHTML for Assignment Number
var assignment = document.getElementById("target-area").innerHTML = "<h2> A5 </h2>";

// Creating a innerHTML for the Name
var name = document.getElementById("target-name").innerHTML = "<h2> Alexies Farinas </h2>";

// Based on Listing 5.14 in the book
var favSandwich = {

    "breakfast": [
        {
            "name": "Egg, Sausage and Cheese",
            "bread": "English Muffin"
        },
        {
            "name": "Egg Whites on Flatbread",
            "bread": "Flatbread"
        }
    ],

    "lunch": [
        {
            "name": "Turkey Club",
            "bread": "Wheat Bread"
        },
        {
            "name": "Grilled Cheese",
            "bread": "White Bread"
        }
    ],

    "dinner": [
        {
            "name": "Meatball",
            "bread": "Kaiser Roll"
        },
        {
            "name": "Hamburger",
            "bread": "Hamburger Roll"
        }
    ],
};

/* go to dinner and get the name of the first item */
alert(favSandwich); // Should call [object Object]

/* stringify the JSON object first */
var stringObject = JSON.stringify(favSandwich);

/* add the string object to localStorage */
localStorage.setItem("favSandwich", stringObject);

alert(stringObject);

var storedItems = localStorage.getItem("favSandwich");
alert(storedItems);

var convertObject = JSON.parse(storedItems);
alert(convertObject);
