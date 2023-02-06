'use strict';

var myname = prompt("Please enter your name: ");
console.log(myname);

var gender = prompt("Please enter your gender (male or female): ");
console.log(gender);

var age = prompt("Please enter your age: ");
console.log(age);

if(age<=0)
{
    alert("the age is invalid");
    var age = prompt("Please re-enter your age: ");
    console.log(age);


}

var skip = confirm("Do you want to skip the welcome message?");

if(skip === false)
{
    switch(gender) {
        case "male":
            alert("Welcome Mr "+myname+ " " + " you are  " +age+" "+" years old");
                break;
        case "female":
            alert("Welcome Ms "+myname+ " " + " you are  " +age+" "+" years old");
                break;
    }
    
    
}

