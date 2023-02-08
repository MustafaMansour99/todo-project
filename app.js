'use strict';

let myname = prompt("Please enter your name: ");
console.log(myname);

let gender = prompt("Please enter your gender (male or female): ");
console.log(gender);

let age = prompt("please enter your age");
console.log(age);
while (age <= 0) {
  alert("invalid age ");
  age = prompt("Please re-enter your age:");
  console.log(age);
}
let skip = confirm("Do you want to skip the welcome message?");

if (skip === false) {
  switch (gender) {
    case "male":
      alert("Welcome Mr " + myname + " " + " you are  " + age + " " + " years old");
      break;
    case "female":
      alert("Welcome Ms " + myname + " " + " you are  " + age + " " + " years old");
      break;
  }


}
let arr =[];
let question1 = prompt("Do you love JavaScript?");
let question2 = prompt("Does JavaScript easy language?");
let question3 = prompt("Does JavaScript have function?");

function compare(m)
{
  if (m === "yes" || m === "no") 
  {
    arr.push(m);
  }
  else
  {
    arr.push("invalid");
  }

}

function pushh(){
  for(let i = 0; i<arr.length; i++)
  {
    console.log(arr[i]);
  }
}
compare(question1);
compare(question2);
compare(question3);
console.log(arr);
pushh();




// if (question1 === "yes" || question1 === "no") {
//   console.log(question1);
// }
// else {
//   question1 = "invalid";
// }
// if (question2 === "yes" || question2 === "no") {
//   console.log(question2);
// }
// else {
//   question2 = "invalid";
// }
// if (question3 === "yes" || question3 === "no") {
//   console.log(question3);
// }
// else {
//   question3 = "invalid";
// }

// let answer = [question1, question2, question3];
// console.log(answer);


