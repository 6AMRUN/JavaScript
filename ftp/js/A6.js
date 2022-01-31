/**
 *    FileName:  A6.js
 *  Assignment:  JavaScript Document for assignment: A6
 *      Course:  CIT 152
 *  Instructor:  Dr. Brodersen
 *
 *      Author:  Alexies Farinas | ALEXIES.FARINAS@student.csn.edu
 *        Date:  3/16/2021
 *     Version:  1.6
 *
 * Description: Use a for loop to create a JSON Object using a parallel array
 *
 **/
// Creating a innerHTML for Webpage Heading
var header = document.getElementById("heading").innerHTML = "<h1>CIT 152 JavaScript Programming</h1>";

// Creating a innerHTML for Assignment Number
var assignment = document.getElementById("target-area").innerHTML = "<h2> A6 </h2>";

// Creating a innerHTML for the Name
var name = document.getElementById("target-name").innerHTML = "<h2> Alexies Farinas </h2>";

// Arrays
var fName = ["Amy", "Ali", "Samuel"],
    lName = ["Delacruz", "Lee", "Vargas"],
    emails = ["amy@example.com", "A.Lee@example.com", "SamVargas@example.com"];


var data = [];


for (var i = 0; i < fName.length; i++) {
    var x = '{ "firstName" : "'
    x += fName[i];
    x += '","lastName" : "';
    x += lName[i];
    x += '","email" : "';
    x += emails[i];
    x += '"}'
    data.push(x);
}

for (var i = 0; i < data.length; i++) {
    var item = JSON.parse(data[i]);
    document.getElementById("table").innerHTML += '<tr><td>' +
        item.firstName + '</td>' + '<td>' + item.lastName + '</td>' + '<td>' +
        item.email + '</td></tr>';
}
