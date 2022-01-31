// JavaScript Document for assignment A4

   // This support function changes the css attribute on the tag to
   // display the bio by becoming part of an event listener.
 
function showBio() {
    'use strict';
    var bio = document.getElementById(bio);
    bio.setAttribute(class, show);
}


   // This support function changes the css attribute on the tag to
   // hide the bio by becoming part of an event listener.
  
function hideBio() {
    'use strict';
    var bio = document.getElementById(bio);
    bio.setAttribute(class, hide);
}


   // This function sets up the listeners for the bio buttons
 
function setUpBioButtons() {
    use strict;
     save the nodes that hold the buttons and bio to variables 
     note the comma at the end of the lines.
    var buttonShow = document.getElementById(show);
    var buttonHide = document.getElementById(hide);

     add the event listener functions to each button 
    buttonShow.addEventListener(click, showBio, false);
    buttonHide.addEventListener(click, hideBio, false);
}


   This function places the title into the header block
   by obtaining the web page path and extracting the name
 
function placeTitle() {
    use strict;
     hooks into web page
    var assnName = document.getElementById(assnName);

     insert assignment name into header 
     get the entire path and whole file name
    var path = window.location.pathname;

     extract the whole file name from the path by
     using split to place the path elements into an array
     and popping off the last element
    var pageFile = path.split().pop();

     use split create a new array that has two elements
     the filename [0] and extension [1]
    var pageName = pageFile.split(.);

     since the file name is the assignment number
     get the file name
    var assnNum = pageName[0];

     if the file name is index don't include an assignment number
    if (assnNum === index) {
        assnNum = ;
    }

     if the length of the extracted name is  0 it must be an assignment
    if (assnNum.length  0) {
         change the document title
        document.title = assnNum;
         change the assignment name
        assnName.innerHTML = assnNum + br Dr. David Brodersen;

     it wasn't an assignment, so it must be the home page
    } else {
         change the document title
        document.title = Home;
         change the assignment name
        assnName.innerHTML = Home Pagebr Dr. David Brodersen;
    }
}