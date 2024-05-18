
import inquirer from "inquirer"


let loop = true;
interface userInput{
     currencyIput: string,
     amountInput: number,
     currencyOutput: string
}

while(loop){

    const userInput: userInput = await inquirer .prompt([
        {
        type: "list",
        name: "currencyInput",
        choices: ["PKR", "USD", "GBP"],
        message: "select your  input currency: "
        }, 
        {
            type:"number",
            name:"amountInput",
            message: "Enter the amount you want to convert"
        },
        {
            type:"list",
            name:"currencyOutput",
            choices: ["PKR", "USD", "GBP"],
            message: "select your Output currency"
        },
]);

const input =userInput.currencyIput;
const output =userInput.currencyOutput;
const amount =userInput.amountInput;

if(input === "PKR"){
    if(output === "USD"){
        console.log(' The ${amount} PKR is equal to $ {amount / 281}USD')
    }else if (output === "GBP"){
        console.log (' The${amount} PKR is equal to $ {amount / 75}GBP')
    }
}else if (input === "USD"){
    if(output === "PKR"){
        console.log(' The ${amount} USD is equal to $ {amount*281}PKR')
    }else if (output === "GBP"){
        console.log (' The${amount} USD is equal to $ {amount * 3.75}GBP')
    }
}else if (input === "GBP"){
    if(output === "USD"){
        console.log(' The ${amount} GBP  is equal to $ {amount * 75}PKR')
    }else if (output === "PKR"){
        console.log (' The${amount} PKR is equal to $ {amount / 3.75}USD')
    }
}

const calulateAgain = await inquirer.prompt({
    type: "confirm",
    name: "calulateMore",
    message: "Do you want more conversations?",
    default: false
});

if(!calulateAgain.calulateMore){
   loop = false;
}

}


  