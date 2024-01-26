//****************************************************************************************
//
//
//    Filename:    candidate-testing.js
//    Date:        25 January 2024
//    Author:      Kyle McColgan
//    Description: This program provides a console-based quiz using Javascript.
//
//
//****************************************************************************************

const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions
// TODO 1.1a: Define candidateName
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer

let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";

//TODO: Variables for Part 2
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];

//****************************************************************************************

function askForName()
{
    // TODO 1.1b: Ask for candidate's name //
    candidateName = input.question("Please enter your first name: ");
}

//****************************************************************************************

function askQuestion()
{
    // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer
    for (let i = 0; i < questions.length; i ++)
    {
        candidateAnswer = input.question(questions[i]);
        candidateAnswers.push(candidateAnswer);
    }
}

//****************************************************************************************

function gradeQuiz(candidateAnswers)
{
    let numCorrect = 0;
    // TODO 1.2c: Let the candidate know if they have answered
    for (let i = 0; i < candidateAnswers.length; i ++)
    {
        //convert to string
        if ( (candidateAnswers[i].toUpperCase()) == (correctAnswers[i].toUpperCase()))
        {
            console.log("\nCorrect!");
            numCorrect += 1;
        }
        else
        {
            console.log("\nIncorrect!");
        }

        console.log(`\nYou answered: ${candidateAnswers[i]}`);
        console.log(`The correct answer was: ${correctAnswers[i]}`);
    }

    let grade;  //TODO 3.2 use this variable to calculate the candidates score.

    grade = (numCorrect / candidateAnswers.length) * 100;

    console.log(`\nOverall Grade: ${grade}% (${numCorrect} of ${candidateAnswers.length} responses correct)`);

    if ( grade >= 80 )
    {
        console.log("\nStatus: PASSED");
    }
    else
    {
        console.log("\nStatus: FAILED");
    }

    return grade;
}

//****************************************************************************************

function runProgram()
{
    askForName();
    // TODO 1.1c: Greet candidate using their name //
    console.log("Greetings, ", candidateName);
    askQuestion();
    gradeQuiz(this.candidateAnswers);
}

//****************************************************************************************

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};

//****************************************************************************************

/*
Candidate-Testing-Autograded> node index.js
Please enter your first name: Kyle
Greetings,  Kyle
Who was the first American woman in space? Sally Ride
True or false: 5 kilometer == 5000 meters? trUE
(5 + 3)/2 * 10 = ? 40
Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? Trajectory
What is the minimum crew size for the ISS? 3

Correct!

You answered: Sally Ride
The correct answer was: Sally Ride

Correct!

You answered: trUE
The correct answer was: true

Correct!

You answered: 40
The correct answer was: 40

Correct!

You answered: Trajectory
The correct answer was: Trajectory

Correct!

You answered: 3
The correct answer was: 3

Overall Grade: 100% (5 of 5 responses correct)

Status: PASSED
*/
