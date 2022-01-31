/**
 *    FileName:  A2.js
 *  Assignment:  JavaScript Document for assignment: a2
 *      Course:  CIT 152
 *  Instructor:  Dr. Brodersen
 *
 *      Author:  Alexies Farinas | ALEXIES.FARINAS@student.csn.edu
 *        Date:  2/9/2021
 *     Version:  1.2
 *
 * Description: Java Script File for A2, 2 Buttons that both show and hide bio
 *
 **/

/* Variables */
var b1 = document.getElementById('show');
var b2 = document.getElementById('hide');
var target = document.getElementById('target');

/* Function that hides contents within the button */
function hide(){
    target.setAttribute('class','hide');
}

function show(){
    target.setAttribute('class','show');
}

b1.addEventListener('click', show, false);
b2.addEventListener('click', hide, false);

