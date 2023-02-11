'use strict';

let myname = prompt("Please enter your name: ");
console.log(myname);

let gender = prompt("Please enter your gender (Male or Female): ");
console.log(gender);

let age = prompt("please enter your age");
console.log(age);
while (age <= 0) {
  alert("invalid age ");
  age =prompt(" Please re-enter your age:");
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
let question1 = "Do you love JavaScript?/YES OR NO";
let question2 = "Does JavaScript easy language?/YES OR NO";
let question3 = "Does JavaScript have function?/YES OR NO";

function prompt_question(question){
  let x = prompt(question);
  compare(x);
}

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
prompt_question(question1);
prompt_question(question2);
prompt_question(question3);
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


