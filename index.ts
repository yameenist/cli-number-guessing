#!/usr/bin/env node

import inquirer from "inquirer";

//1)computer will generate random number.done
//2)user input Guessed number.done
//3) compare user input with computer generate number and show result done 

const randomNumber = Math.floor(Math.random()* 5+1);
const answers = await inquirer.prompt([
    {
        name : "userGuessedNumber",
        type : "number",
        message : "please guess a number between 1 to 5",
    }
]);

console.log(answers);

if (answers.userGuessedNumber === randomNumber)
{
    console.log("congratulation! you guessed right number.");
} else {
    console.log("you guessed wrong number.");
}