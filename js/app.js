"use strict"
let userDialogu=[];
let userName = prompt("Enter your name please: ");
question(userName);
let userGender = prompt("Enter your Gender please(should be male/female): ");
question(userGender);
let userAge = prompt("Enter your Age please: ");
                if(!userAge)
                {
                  question(userAge);
                }
                else if (userAge <= 0) 
                {
                  alert("Your age is wrong!!!!.Your age should be bigger than 0.");
                  userAge="invalid";
                  userDialogu.push(userAge);
                }
                else 
                userDialogu.push(userAge);
let userConfirmMesg = confirm("Do you want to skip the Welcoming message?");
welcomeingMessag();
let userStatus = prompt("Are you married?(Yes/No)");
question(userStatus);
let userTravelling = prompt("Have you ever travelled abroad?(Yes/No)");
question(userTravelling);
let userInteTime = prompt("Do you spend a lot of time on the internet?(Yes/No)");
question(userInteTime);

function welcomeingMessag()
{
  userDialogu.push(userConfirmMesg);
  if (!userConfirmMesg) {
  userGender == "male"
    ? alert("Welcome Mr " + userName)
    : userGender == "female"
    ? alert("Welcome Ms " + userName)
    : alert("Welcome " + userName);
}
}
function question(params) {
  
  if(params=="" || params==null){
    params="invalid"
  }
  userDialogu.push(params);  
}
console.log(userDialogu);
