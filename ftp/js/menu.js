/**
 *    FileName:  menu.js
 *  Assignment:  JavaScript Document for all assignments
 *      Course:  CIT 152
 *  Instructor:  Dr. Brodersen
 *
 *      Author:  Alexies Farinas ALEXIES.FARINAS@student.csn.edu
 *     Created:  3/9/21
 *     Version:  1.0
 *
 * Description: This JavaScript file holds the functions for
 *              populating the menu used in the pages on the
 *              web site. We generate an html string that will 
 *              render a menu system and write it to the document.
 *
 **/

function showMenu() {
    var menuList = ['<li><a href="A0.html">Assignment A0</a></li>' +
                    '<li><a href="A1.html">Assignment A1</a></li>' +
                    '<li><a href="A2.html">Assignment A2</a></li>' +
                    '<li><a href="A3.html">Assignment A3</a></li>' +
                    '<li><a href="A4.html">Assignment A4</a></li>' +
                    '<li><a href="A5.html">Assignment A5</a></li>' +
                    '<li><a href="A6.html">Assignment A6</a></li>' +
                    '<li><a href="A7.html">Assignment A7</a></li>' +
                    '<li><a href="A8.html">Assignment A8</a></li>'];

    // Get menu location
    var menuID = document.getElementById("menu");
    // render menu
    menuID.innerHTML = menuList;
}
