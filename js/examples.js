
/*  (From A4)
*   1. Create elements with text into the header with appendChild
*   2. Use innerHTML to insert text into header 
*/

// store target areas in variable
var targetH1 = document.getElementById("createH1");

// create h1 & h2 elements for header
var heading = document.createElement("h1");

// create text node in h1 element
var headingText = document.createTextNode("CIT 152 JavaScript Programming");
heading.appendChild(headingText);

// insert created h1 & h2 elements into the header
targetH1.appendChild(heading);

// same steps for inserting an h2 element in the header
var targetPageNum = document.getElementById("target-pageNum");

var pageNum = document.createElement("h2");

var pageNumText = document.createTextNode("A6");
pageNum.appendChild(pageNumText);

targetPageNum.appendChild(pageNum);

// use innerHTML to create text in the header 
document.getElementById("target-nombre").innerHTML = "<h2>Todd Maracle &#8226; Sprint 2021</h2>";


/*  1. Create parallel arrays for contacts data
*   2. Put into String with a for loop
*   3. Convert to JSON object
*   4. Displaying in HTML page with for loop
*/

// Create parallel arrays
var fName = ["Ted", "Pat", "Mary", "Dom", "Magda"],
    lName = ["Stroehmann", "Healy", "Jensen", "Woganowski", "Doe"],
    email = ["ts@example.com", "ph@example.com", "mj@example.com", "dw@example.com", "md@example.com"];

// Create string variable in format of JSON
var contactList = '{"firstName":"' + fName[0] + '","lastName":"' + lName[0] + '","email":"' + email[0] + '"}';

// Create for loop that puts array data into string variable
var contactsCount = fName.length, 
	i;

for (i = 1; i < contactsCount; i = i + 1) {
	
	contactList = contactList + ',{"firstName":"' + fName[i] + '","lastName":"' + lName[i] + '","email":"' + email[i] + '"}';
}

// adds starting and closing part of JSON format
var addressBookString = '{"addressBook":[' + contactList + ']}';

// parse string into JSON object 
var addressBookObject = JSON.parse(addressBookString);

// create new for loop that displays each JSON element on HTML page 
// start by declaring variables to be used in for loop
var object = addressBookObject.addressBook,
	objectCount = object.length,
	target = document.getElementById("display"),
	i;

for (i = 0; i < objectCount; i = i + 1) {
	
	// create variables within for loop
	var item = object[i],
	firstName = item.firstName,
	lastName = item.lastName,
	email = item.email,
	number = i + 1;

	target.innerHTML += '<p>' + number + '. ' + firstName + ' ' + lastName + ', email: ' + email + ' </p>';
}

