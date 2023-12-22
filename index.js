import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        type: "number",
        name: "num1",
        message: "input your first number"
    },
    {
        type: "number",
        name: "numm2",
        message: "input your second number"
    },
    {
        type: "list",
        name: "operator",
        message: "select your desired operator: ",
        choices: ["Add", "Subtract", "Multiply", "Divide"]
    }
]);
let result;
switch (answer.operator) {
    case "Add":
        result = answer.num1 + answer.numm2;
        console.log("the answer of this addition is :" + result);
        break;
    case "Subtract":
        result = answer.num1 - answer.numm2;
        console.log("the answer of this subtraction is :" + result);
        break;
    case "Multiply":
        result = answer.num1 * answer.numm2;
        console.log("the answer of this multiplication is :" + result);
        break;
    case "Divide":
        result = answer.num1 / answer.numm2;
        console.log("the answer of this division is :" + result);
        break;
}
