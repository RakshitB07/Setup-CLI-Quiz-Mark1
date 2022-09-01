//import required packages

const chalk = require('chalk');
var readlineSync = require("readline-sync");

//Initial score

score = 0

//Welcome note

console.log(chalk.yellowBright("Let's see how well you know my SETUP. \n\n"))
console.log(chalk.yellowBright("Try to answer truthfully without looking at the code. \n\n"))

//greetings / take username

var userName = readlineSync.question((chalk.magentaBright("What is your name buddy? ")))
console.log(chalk.cyanBright("\nHey! " + userName + "\nWelcome to my SETUP quiz & I hope you're having an amazing day!\n\n"))

//Rules

console.log(chalk.yellowBright("---------------------------------------------------\n"))

//Let's see if you can beat the high score

console.log(chalk.redBright("Rules: \n1. -2 for wrong answer. \n2. +5 for correct answer.\n"))
//Leader board

console.log(chalk.greenBright("Leader board:\n1. Jay - 11 Points!\n2. Jhanvi - 5 Points!\n3. Varun - 3 Points!\n"))
console.log(chalk.yellowBright("---------------------------------------------------\n"))

//ask the user if he want to play

var userInterested = readlineSync.question(chalk.green("Are you ready?\n(Press 'y' to continue or 'n' to stop)\n\n"))
if (userInterested === "y") {
    console.log(chalk.blue("\nSweet! Let's begin.\n"))

    function play(question, answer) {
        var userAnswer = readlineSync.question(question);

        if (userAnswer.toLowerCase() === answer) {
            score = score + 5;
            console.log(chalk.green("That's correct!"))
            console.log(chalk.cyan("Score: " + score))
            console.log(chalk.yellowBright("\n---------------------------------------------------\n"))
        } else {
            score = score - 2;
            console.log(chalk.red("Sike!! That's the wrong answer."))
            console.log(chalk.green("The answer was " + answer))
            console.log(chalk.cyan("Score: " + score))
            console.log(chalk.yellowBright("\n---------------------------------------------------\n"))
        }
    }

    //Questions
    var question = [{
            question: "Q.1) What company monitor do I have?\na. MSI\nb. Acer\nc. Samsung\nd. LG\nAnswer: ",
            answer: "a"
        },
        {
            question: "Q.2) What CPU do I have?\na. i5\nb. i3\nc. i9\nd. i7\nAnswer: ",
            answer: "d"

        },
        {
            question: "Q3) What GPU do I have?\na.amd\nb.nvidia\nc.No GPU\nd.It's an APU\nAnswer: ",
            answer: "b"
        },
        {
            question: "Q4) What mouse do I use?\na.logitech\nb.HP\nc.zowie\nd.razer\nAnswer: ",
            answer: "d"
        },
        {
            question: "Q5) Which keyboard do I use?\na.logitech\nb.razer\nc.hyperX\nd.microsoft\nAnswer: ",
            answer: "c"
        }
    ];

    //for loop
    for (var i = 0; i < question.length; i++) {
        var currentQuestion = question[i];
        play(currentQuestion.question, currentQuestion.answer);
    }

    console.log(chalk.green("Thanks for playing! " + userName + " you did good.\n"));

    if (score > 11) {
        console.log(chalk.yellowBright("---------------------------------------------------\n"))
        console.log(chalk.cyanBright("Congratulations! " + userName + " You've beat the high score\nIf you'd like to display your name on the leader board take a screenshot & contact me on twitter!"))
        console.log(chalk.yellowBright("\n---------------------------------------------------"))
    }


} else if (userInterested === "n") {
    console.log(chalk.magentaBright("\noki-doki try later sometime."));
} else {
    console.log(chalk.red("\nBZZZZZ!!! Wrong input!"));
}

console.log(chalk.blueBright("\nTwitter: @Rakshit1337\n\n"));