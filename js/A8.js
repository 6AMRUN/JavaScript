/**
 *
 *    FileName:  A8.js
 *  Assignment:  JavaScript Document for assignment: A8
 *      Course:  CIT 152
 *  Instructor:  Dr. Brodersen
 *
 *      Author:  Alexies Farinas | ALEXIES.FARINAS@student.csn.edu
 *        Date:  4/19/2021
 *     Version:  1.8
 *
 * Description: Describe the purpose of this JavaScript file
 *
 **/
// Creating a innerHTML for Webpage Heading
var header = document.getElementById("heading").innerHTML = "<h1>CIT 152 JavaScript Programming</h1>";

// Creating a innerHTML for Assignment Number
var assignment = document.getElementById("target-area").innerHTML = "<h2> A8 </h2>";

// Creating a innerHTML for the Name
var name = document.getElementById("target-name").innerHTML = "<h2> Alexies Farinas </h2>";


var xmlhttp;
if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest();
} else { // code for IE6, IE5
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}

var xhp = new XMLHttpRequest();
var menuID = document.getElementById("menu");
xhp = xmlhttp;

xhp.onreadystatechange = function () {
    if (xhp.readyState === 4 && xhp.status === 200) {
        menuID.innerHTML = xhp.responseText;
    }
};

xmlhttp.open("GET", "data/menu_stub.txt", true);
xmlhttp.send();
