import inquirer from "inquirer";
const randomnumber = Math.floor(Math.random() * 7 + 1);
// console.log(randomnumber);
const number = await inquirer.prompt({
    name: "guessednumber",
    type: "number",
    message: "please enter the number between 1-7",
});
// conditions 
if (number.guessednumber === randomnumber) {
    console.log("congratulation you are genius");
}
else {
    console.log("you guessed wrong number");
}
