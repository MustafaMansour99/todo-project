'use strict';

let myname = prompt("Please enter your name: ");
console.log(myname);

let gender = prompt("Please enter your gender (male or female): ");
console.log(gender);

 let age = prompt("please enter your age");
 console.log(age);
 while(age <= 0) {
     alert("invalid age ");
    age = prompt("Please re-enter your age:");
     console.log(age);
    }
//let age = prompt("enter your age");
//if(age <= 0)
//{
   /// alert("the age is invalid");
     //age = prompt("Please re-enter your age: ");
    //console.log(age);
//}


let skip = confirm("Do you want to skip the welcome message?");

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
let question1 =prompt("Do you love JavaScript?");
let question2 =prompt("Does JavaScript easy language?");
let question3 =prompt("Does JavaScript have function?");
if(question1 === "")
{
    question1="invalid";
}
else if(question1==="yes"||question1==="no")
{
  console.log(question1);
}

if(question2 === "")
{
    question2="invalid";
}
else if(question2==="yes"||question2==="no")
{
  console.log(question2);
}
if(question3 === "")
{
    question3="invalid";
}
else if(question3==="yes"||question3==="no")
{
  console.log(question1);
}

let answer=[question1,question2,question3];
console.log(answer);
