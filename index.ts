#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

const answer = await inquirer.prompt([
  { message: chalk.italic.greenBright("Enter your first number"), type: "number", name: "firstNumber" },
  { message: chalk.italic.greenBright("Enter second number"), type: "number", name: "secondNumber" },
  {
    message: chalk.yellowBright("Select one of the operators to perform operation"),
    type: "list",
    name: "operator",
    choices: [chalk.bgBlueBright("Addition"), chalk.bgCyanBright.black("Subtraction"), chalk.bgMagenta("Multiplication"),chalk.bgRedBright( "Divison")],
  },
]);
if (answer.operator === chalk.bgBlueBright("Addition")) {
  console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === chalk.bgCyanBright.black("Subtraction")) {
  console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operator ===  chalk.bgMagenta("Multiplication")) {
  console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operator === chalk.bgRedBright( "Divison")) {
  console.log(answer.firstNumber / answer.secondNumber);
} else {
  console.log(chalk.bgMagentaBright("please select  valid operator"));
}
