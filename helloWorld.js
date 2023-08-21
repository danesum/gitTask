//initilialise global variable
let userInput = "";
//while the input is blank (as initialised), keep
//prompting user to input something
do {
  userInput = prompt("Enter a message:");
} while (userInput == "");
//when the above runs successfully, this will display the output
alert(`Git is awesome! ${userInput}`);
//github link: https://github.com/danesum/gitTask
