var userName = prompt("Enter your name please: ");
var userGender = prompt("Enter your Gender please(should be male/female): ");
var userAge = prompt("Enter your Age please: ");
if (userAge <= 0) {
  alert("Your age is wrong!!!!.Your age should be bigger than 0.");
}
var userConfirmMesg = confirm("Do you want to skip the Welcoming message?");
if (!userConfirmMesg) {
  userGender == "male"
    ? alert("Welcome Mr " + userName)
    : userGender == "female"
    ? alert("Welcome Ms " + userName)
    : alert("Welcome " + userName);
}
