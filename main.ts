#! /usr/bin/env node 

import inquirer from "inquirer";
import chalk from "chalk";

let condition = true;
while (condition) {
    let answer = await inquirer.prompt(
        [
            {
                name:"firstNumber",
                type:"number",
                message:"Enter your first number \n "
            },
            {
                name:"secondNumber",
                type:"number",
                message:"Enter your second number \n"
            },
            {
                name:"operation",
                type:"list",
                message:"Select the option\n",
                choices:["Addition","Subtraction","Multiplication","Division"]
            }
        ]
    );
    if (answer.operation === "Addition") {
        console.log(chalk.bgMagentaBright.whiteBright(answer.firstNumber + answer.secondNumber));
        condition = false
    }else if (answer.operation === "Subtraction") {
        console.log(chalk.bgMagentaBright.whiteBright(answer.firstNumber - answer.secondNumber));
        condition = false
    }else if (answer.operation === "Multiplication") {
        console.log(chalk.bgMagentaBright.whiteBright(answer.firstNumber * answer.secondNumber));
        condition =false
    }else if (answer.operation === "Division") {
        console.log(chalk.bgMagentaBright.whiteBright(answer.firstNumber / answer.secondNumber));
        condition =false
    }else{
        console.log(chalk.bgBlue.whiteBright(`Enter valid number`));
        condition =false
    };

    let anotherAnswer = await inquirer.prompt(
        [
            {
                name:"another",
                type:"confirm",
                message:"Do you want another calculation",
                default:true,
            },
        ]
    );
    if (anotherAnswer.another === true) {
        
    async function anotherCalculation() {
        let AnotherCalculation = await inquirer.prompt(
            [
                {
                    name:"thirdNumber",
                    type:"number",
                    message:"Enter your first number"
                },
                {
                    name:"fourthNumber",
                    type:"number",
                    message:"Enter your second number"
                },
                {
                    name:"finalCalculation",
                    type:"list",
                    message:"Select the option",
                    choices:["Addition","Subtraction","Multiplication","Division"]
                }
            ]
        );
        if(AnotherCalculation.finalCalculation === "Addition"){
            console.log(chalk.bgMagentaBright.whiteBright(AnotherCalculation.thirdNumber + AnotherCalculation.fourthNumber));
            condition = false
        }else if(AnotherCalculation.finalCalculation === "Subtraction"){
            console.log(chalk.bgMagentaBright.whiteBright(AnotherCalculation.thirdNumber - AnotherCalculation.fourthNumber));
            condition = false
        }else if(AnotherCalculation.finalCalculation === "Multiplication"){
            console.log(chalk.bgMagentaBright.whiteBright(AnotherCalculation.thirdNumber * AnotherCalculation.fourthNumber));
            condition = false
        }else if (AnotherCalculation.finalCalculation === "Division"){
            console.log(chalk.bgMagentaBright.whiteBright(AnotherCalculation.thirdNumber / AnotherCalculation.fourthNumber));
            condition = false
        }
    }
    anotherCalculation()
}else{
    console.log(chalk.bgBlue.whiteBright(`Thank for using`));
    
}
}