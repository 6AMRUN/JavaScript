/**
 *    FileName:  A7.js
 *  Assignment:  JavaScript Document for assignment: A7
 *      Course:  CIT 152
 *  Instructor:  Dr. Brodersen
 *
 *      Author:  Alexies Farinas | ALEXIES.FARINAS@student.csn.edu
 *        Date:  3/25/2021
 *     Version:  1.7
 *
 * Description: Get out based on name searched OR output All of the elements in the   *              Array
 *
 **/

// Creating a innerHTML for Webpage Heading
var header = document.getElementById("heading").innerHTML = "<h1>CIT 152 JavaScript Programming</h1>";

// Creating a innerHTML for Assignment Number
var assignment = document.getElementById("target-area").innerHTML = "<h2> A7 </h2>";

// Creating a innerHTML for the Name
var name = document.getElementById("target-name").innerHTML = "<h2> Alexies Farinas </h2>";

/* wrap everything in an anonymous function to contain the variables */
(function () {
    /* create address book data */
    var contacts = {
        "addressBook": [
            {
                "FName": "Amy",
                "LName": "Delacruz",
                "email": "amy@example.com",
            },
            {
                "FName": "Ali",
                "LName": "Lee",
                "email": "A.Lee@example.com",
            },
            {
                "FName": "Samuel",
                "LName": "Vargas",
                "email": "SamVargas@example.com",
            }
        ]
    };

    /* define the DOM elements and common variables you'll need */
    var searchForm = document.getElementById("search-form"),
        searchField = document.getElementById("q"),
        getAllButton = document.getElementById("get-all"),
        count = contacts.addressBook.length,
        target = document.getElementById("output");

    /* define address book methods */
    var addr = {
        search: function (event) {

            // save the input value, contacts length and i to variables
            var searchValue = searchField.value;
            // stop the default behavior
            event.preventDefault();
            // clear the target area just in case there's something in it.
            target.innerHTML = "";
            // check the count, of course
            if (count > 0 && searchValue !== "") {
                // loop through the contacts
                for (var i = 0; i < count; i++) {

                    // look through the name value to see if it contains the searchterm string
                    var obj = contacts.addressBook[i],
                        isItFound = obj.FName.indexOf(searchValue);
                    // anything other than -1 means we found a match
                    if (isItFound !== -1) {
                        target.innerHTML += '<tr><td>' + obj.FName + '</td><td>' + obj.LName + '</td><td><a href="mailto:' + obj.email + '">' + obj.email + '</a></td></tr>';
                    } // end if

                } // end for loop

            } // end count check
        },
        getAllContacts: function () {
            var i;
            // clear the target area just in case there's something in it.
            target.innerHTML = "";
            // check the count, of course
            if (count > 0) {
                // loop through the contacts
                for (i = 0; i < count; i++) {
                    var obj = contacts.addressBook[i];
                    target.innerHTML += '<tr><td>' + obj.FName + '</td><td>' + obj.LName + '</td><td><a href="mailto:' + obj.email + '">' + obj.email + '</a></td></tr>';
                } // end for loop

            } // end count check

        },
        setActiveSection: function () {
            // add a class of "active" to the wrapping div
            this.parentNode.setAttribute("class", "active");
        },
        removeActiveSection: function () {
            // remove the class from the wrapping div
            this.parentNode.removeAttribute("class");
        },
        addHoverClass: function () {
            // add the class to the wrapping div
            searchForm.setAttribute("class", "hovering");
        },
        removeHoverClass: function () {
            // remove the class from the wrapping div
            searchForm.removeAttribute("class");
        }
    } // end addr object

    /* activate the event listeners */
    searchField.addEventListener("keyup", addr.search, false);
    searchField.addEventListener("focus", addr.setActiveSection, false);
    searchField.addEventListener("blur", addr.removeActiveSection, false);
    getAllButton.addEventListener("click", addr.getAllContacts, false);
    searchForm.addEventListener("mouseover", addr.addHoverClass, false);
    searchForm.addEventListener("mouseout", addr.removeHoverClass, false);
    searchForm.addEventListener("submit", addr.search, false);
})
(); // end anonymous function
