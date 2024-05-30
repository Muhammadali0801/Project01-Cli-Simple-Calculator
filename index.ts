#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bgGreenBright.black("Welcome to the mshk Calculator!"));
console.log("__________________________________________________________________________");

async function main() {
  let continueCalculating = true;
 
  while(continueCalculating){

const answer = await inquirer.prompt([
  { message: chalk.italic.greenBright("Enter your first number"),
   type: "input",
    name: "firstNumber", 
    validate: input => !isNaN(input) || chalk.red("Please enter a valid number")},

  { message: chalk.italic.greenBright("Enter second number"),
   type: "input",
    name: "secondNumber",
    validate: input => !isNaN(input) || chalk.red("Please enter a valid number")},
  {
    message: chalk.yellowBright("Select one of the operators to perform operation"),
    type: "list",
    name: "operator",
    choices: [chalk.bgBlueBright("Addition"), chalk.bgCyanBright.black("Subtraction"), chalk.bgMagenta("Multiplication"),chalk.bgRedBright( "Divison")],
  },
]);

const firstNumber = parseFloat(answer.firstNumber);
const secondNumber = parseFloat(answer.secondNumber);

if (answer.operator === chalk.bgBlueBright("Addition")) {
  console.log(chalk.blue(`Result: ${firstNumber + secondNumber}`));
} else if (answer.operator === chalk.bgCyanBright.black("Subtraction")) {
  console.log(chalk.cyan(`Result: ${firstNumber - secondNumber}`));
} else if (answer.operator === chalk.bgMagenta("Multiplication")) {
  console.log(chalk.magenta(`Result: ${firstNumber * secondNumber}`));
} else if (answer.operator === chalk.bgRedBright("Divison")) {
  console.log(chalk.red(`Result: ${firstNumber / secondNumber}`));
} else {
  console.log(chalk.bgMagentaBright("Please select a valid operator"));
}
const {confirm} =await inquirer.prompt({
  type: "confirm",
  name: "confirm",
  message: chalk.green("Do you want to perform another calculation?"),
  default: false,
});

continueCalculating = confirm;
  }
console.log("__________________________________________________________________________");

console.log(chalk.bgGreenBright.black("Thank you for using the mshk Calculator!"));
}
main()

