//****************************************************************************************
//
//
//    Filename:    candidate-testing.js
//    Date:        22 January 2024
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
        if ( (candidateAnswers[i].toUpperCase()) == (correctAnswers[i].toUpperCase()))
        {
            console.log("\nCorrect!");
            console.log(`You answered: ${candidateAnswers[i]}`);
            console.log(`The correct answer was: ${correctAnswers[i]}`);
            numCorrect += 1;
        }
        else
        {
            console.log("\nIncorrect!");
            console.log(`You answered: ${candidateAnswers[i]}`);
            console.log(`The correct answer was: ${correctAnswers[i]}`);
        }
    }

    let grade;  //TODO 3.2 use this variable to calculate the candidates score.

    grade = (numCorrect / candidateAnswers.length) * 100;

    if ( grade >= 80 )
    {
        console.log("Congratulations!");
    }
    else
    {
        console.log(`Maybe next time! You failed with a grade of ${grade}...`);
    }

    return grade;
}

//****************************************************************************************

function runProgram() {
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
node index.js
Please enter your first name: Kyle
Greetings,  Kyle
Who was the first American woman in space? Sally Ride
True or false: 5 kilometer == 5000 meters? true
(5 + 3)/2 * 10 = ? 40
Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? Trajectory
What is the minimum crew size for the ISS? 3

Correct!
You answered: Sally Ride
The correct answer was: Sally Ride

Correct!
You answered: true
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


Candidate-Testing-Autograded> npm test

> candidate-testing@1.0.0 test
> jest

  console.log

    Incorrect!

      at Object.log [as gradeQuiz] (candidate-testing.js:63:21)

  console.log
    You answered: foo

      at Object.log [as gradeQuiz] (candidate-testing.js:64:21)

  console.log
    The correct answer was: Sally Ride

      at Object.log [as gradeQuiz] (candidate-testing.js:65:21)

  console.log

    Incorrect!

      at Object.log [as gradeQuiz] (candidate-testing.js:63:21)

  console.log
    You answered: bar

      at Object.log [as gradeQuiz] (candidate-testing.js:64:21)

  console.log
    The correct answer was: true

      at Object.log [as gradeQuiz] (candidate-testing.js:65:21)

  console.log

    Incorrect!

      at Object.log [as gradeQuiz] (candidate-testing.js:63:21)

  console.log
    You answered: baz

      at Object.log [as gradeQuiz] (candidate-testing.js:64:21)

  console.log
    The correct answer was: 40

      at Object.log [as gradeQuiz] (candidate-testing.js:65:21)

  console.log

    Incorrect!

      at Object.log [as gradeQuiz] (candidate-testing.js:63:21)

  console.log
    You answered: lur

      at Object.log [as gradeQuiz] (candidate-testing.js:64:21)

  console.log
    The correct answer was: Trajectory

      at Object.log [as gradeQuiz] (candidate-testing.js:65:21)

  console.log

    Incorrect!

      at Object.log [as gradeQuiz] (candidate-testing.js:63:21)

  console.log
    You answered: man

      at Object.log [as gradeQuiz] (candidate-testing.js:64:21)

  console.log
    The correct answer was: 3

      at Object.log [as gradeQuiz] (candidate-testing.js:65:21)

  console.log

    Correct!

      at Object.log [as gradeQuiz] (candidate-testing.js:57:21)

  console.log
    You answered: Sally Ride

      at Object.log [as gradeQuiz] (candidate-testing.js:58:21)

  console.log
    The correct answer was: Sally Ride

      at Object.log [as gradeQuiz] (candidate-testing.js:59:21)

  console.log

    Correct!

      at Object.log [as gradeQuiz] (candidate-testing.js:57:21)

  console.log
    You answered: true

      at Object.log [as gradeQuiz] (candidate-testing.js:58:21)

  console.log
    The correct answer was: true

      at Object.log [as gradeQuiz] (candidate-testing.js:59:21)

  console.log

    Correct!

      at Object.log [as gradeQuiz] (candidate-testing.js:57:21)

  console.log
    You answered: 40

      at Object.log [as gradeQuiz] (candidate-testing.js:58:21)

  console.log
    The correct answer was: 40

      at Object.log [as gradeQuiz] (candidate-testing.js:59:21)

  console.log

    Correct!

      at Object.log [as gradeQuiz] (candidate-testing.js:57:21)

  console.log
    You answered: Trajectory

      at Object.log [as gradeQuiz] (candidate-testing.js:58:21)

  console.log
    The correct answer was: Trajectory

      at Object.log [as gradeQuiz] (candidate-testing.js:59:21)

  console.log

    Correct!

      at Object.log [as gradeQuiz] (candidate-testing.js:57:21)

  console.log
    You answered: 3

      at Object.log [as gradeQuiz] (candidate-testing.js:58:21)

  console.log
    The correct answer was: 3

      at Object.log [as gradeQuiz] (candidate-testing.js:59:21)

  console.log

    Correct!

      at Object.log [as gradeQuiz] (candidate-testing.js:57:21)

  console.log
    You answered: Sally Ride

      at Object.log [as gradeQuiz] (candidate-testing.js:58:21)

  console.log
    The correct answer was: Sally Ride

      at Object.log [as gradeQuiz] (candidate-testing.js:59:21)

  console.log

    Incorrect!

      at Object.log [as gradeQuiz] (candidate-testing.js:63:21)

  console.log
    You answered: bar

      at Object.log [as gradeQuiz] (candidate-testing.js:64:21)

  console.log
    The correct answer was: true

      at Object.log [as gradeQuiz] (candidate-testing.js:65:21)

  console.log

    Incorrect!

      at Object.log [as gradeQuiz] (candidate-testing.js:63:21)

  console.log
    You answered: baz

      at Object.log [as gradeQuiz] (candidate-testing.js:64:21)

  console.log
    The correct answer was: 40

      at Object.log [as gradeQuiz] (candidate-testing.js:65:21)

  console.log

    Incorrect!

      at Object.log [as gradeQuiz] (candidate-testing.js:63:21)

  console.log
    You answered: lur

      at Object.log [as gradeQuiz] (candidate-testing.js:64:21)

  console.log
    The correct answer was: Trajectory

      at Object.log [as gradeQuiz] (candidate-testing.js:65:21)

  console.log

    Incorrect!

      at Object.log [as gradeQuiz] (candidate-testing.js:63:21)

  console.log
    You answered: man

      at Object.log [as gradeQuiz] (candidate-testing.js:64:21)

  console.log
    The correct answer was: 3

      at Object.log [as gradeQuiz] (candidate-testing.js:65:21)

  console.log

    Correct!

      at Object.log [as gradeQuiz] (candidate-testing.js:57:21)

  console.log
    You answered: Sally Ride

      at Object.log [as gradeQuiz] (candidate-testing.js:58:21)

  console.log
    The correct answer was: Sally Ride

      at Object.log [as gradeQuiz] (candidate-testing.js:59:21)

  console.log

    Incorrect!

      at Object.log [as gradeQuiz] (candidate-testing.js:63:21)

  console.log
    You answered: bar

      at Object.log [as gradeQuiz] (candidate-testing.js:64:21)

  console.log
    The correct answer was: true

      at Object.log [as gradeQuiz] (candidate-testing.js:65:21)

  console.log

    Incorrect!

      at Object.log [as gradeQuiz] (candidate-testing.js:63:21)

  console.log
    You answered: baz

      at Object.log [as gradeQuiz] (candidate-testing.js:64:21)

  console.log
    The correct answer was: 40

      at Object.log [as gradeQuiz] (candidate-testing.js:65:21)

  console.log

    Incorrect!

      at Object.log [as gradeQuiz] (candidate-testing.js:63:21)

  console.log
    You answered: lur

      at Object.log [as gradeQuiz] (candidate-testing.js:64:21)

  console.log
    The correct answer was: Trajectory

      at Object.log [as gradeQuiz] (candidate-testing.js:65:21)

  console.log

    Correct!

      at Object.log [as gradeQuiz] (candidate-testing.js:57:21)

  console.log
    You answered: 3

      at Object.log [as gradeQuiz] (candidate-testing.js:58:21)

  console.log
    The correct answer was: 3

      at Object.log [as gradeQuiz] (candidate-testing.js:59:21)

  console.log

    Correct!

      at Object.log [as gradeQuiz] (candidate-testing.js:57:21)

  console.log
    You answered: Sally Ride

      at Object.log [as gradeQuiz] (candidate-testing.js:58:21)

  console.log
    The correct answer was: Sally Ride

      at Object.log [as gradeQuiz] (candidate-testing.js:59:21)

  console.log

    Incorrect!

      at Object.log [as gradeQuiz] (candidate-testing.js:63:21)

  console.log
    You answered: bar

      at Object.log [as gradeQuiz] (candidate-testing.js:64:21)

  console.log
    The correct answer was: true

      at Object.log [as gradeQuiz] (candidate-testing.js:65:21)

  console.log

    Correct!

      at Object.log [as gradeQuiz] (candidate-testing.js:57:21)

  console.log
    You answered: 40

      at Object.log [as gradeQuiz] (candidate-testing.js:58:21)

  console.log
    The correct answer was: 40

      at Object.log [as gradeQuiz] (candidate-testing.js:59:21)

  console.log

    Incorrect!

      at Object.log [as gradeQuiz] (candidate-testing.js:63:21)

  console.log
    You answered: lur

      at Object.log [as gradeQuiz] (candidate-testing.js:64:21)

  console.log
    The correct answer was: Trajectory

      at Object.log [as gradeQuiz] (candidate-testing.js:65:21)

  console.log

    Correct!

      at Object.log [as gradeQuiz] (candidate-testing.js:57:21)

  console.log
    You answered: 3

      at Object.log [as gradeQuiz] (candidate-testing.js:58:21)

  console.log
    The correct answer was: 3

      at Object.log [as gradeQuiz] (candidate-testing.js:59:21)

  console.log

    Correct!

      at Object.log [as gradeQuiz] (candidate-testing.js:57:21)

  console.log
    You answered: Sally Ride

      at Object.log [as gradeQuiz] (candidate-testing.js:58:21)

  console.log
    The correct answer was: Sally Ride

      at Object.log [as gradeQuiz] (candidate-testing.js:59:21)

  console.log

    Incorrect!

      at Object.log [as gradeQuiz] (candidate-testing.js:63:21)

  console.log
    You answered: bar

      at Object.log [as gradeQuiz] (candidate-testing.js:64:21)

  console.log
    The correct answer was: true

      at Object.log [as gradeQuiz] (candidate-testing.js:65:21)

  console.log

    Correct!

      at Object.log [as gradeQuiz] (candidate-testing.js:57:21)

  console.log
    You answered: 40

      at Object.log [as gradeQuiz] (candidate-testing.js:58:21)

  console.log
    The correct answer was: 40

      at Object.log [as gradeQuiz] (candidate-testing.js:59:21)

  console.log

    Correct!

      at Object.log [as gradeQuiz] (candidate-testing.js:57:21)

  console.log
    You answered: Trajectory

      at Object.log [as gradeQuiz] (candidate-testing.js:58:21)

  console.log
    The correct answer was: Trajectory

      at Object.log [as gradeQuiz] (candidate-testing.js:59:21)

  console.log

    Correct!

      at Object.log [as gradeQuiz] (candidate-testing.js:57:21)

  console.log
    You answered: 3

      at Object.log [as gradeQuiz] (candidate-testing.js:58:21)

  console.log
    The correct answer was: 3

      at Object.log [as gradeQuiz] (candidate-testing.js:59:21)

  console.log

    Incorrect!

      at Object.log [as gradeQuiz] (candidate-testing.js:63:21)

  console.log
    You answered: sally ride

      at Object.log [as gradeQuiz] (candidate-testing.js:64:21)

  console.log
    The correct answer was: Sally Ride

      at Object.log [as gradeQuiz] (candidate-testing.js:65:21)

  console.log

    Incorrect!

      at Object.log [as gradeQuiz] (candidate-testing.js:63:21)

  console.log
    You answered: TRUE

      at Object.log [as gradeQuiz] (candidate-testing.js:64:21)

  console.log
    The correct answer was: true

      at Object.log [as gradeQuiz] (candidate-testing.js:65:21)

  console.log

    Correct!

      at Object.log [as gradeQuiz] (candidate-testing.js:57:21)

  console.log
    You answered: 40

      at Object.log [as gradeQuiz] (candidate-testing.js:58:21)

  console.log
    The correct answer was: 40

      at Object.log [as gradeQuiz] (candidate-testing.js:59:21)

  console.log

    Incorrect!

      at Object.log [as gradeQuiz] (candidate-testing.js:63:21)

  console.log
    You answered: TrAjEcToRy

      at Object.log [as gradeQuiz] (candidate-testing.js:64:21)

  console.log
    The correct answer was: Trajectory

      at Object.log [as gradeQuiz] (candidate-testing.js:65:21)

  console.log

    Correct!

      at Object.log [as gradeQuiz] (candidate-testing.js:57:21)

  console.log
    You answered: 3

      at Object.log [as gradeQuiz] (candidate-testing.js:58:21)

  console.log
    The correct answer was: 3

      at Object.log [as gradeQuiz] (candidate-testing.js:59:21)

 FAIL  test/candidate-testing.test.js
  Candidate Testing solution
    ✓ Test 1. Data type of candidateName is string (2 ms)
    ✓ Test 2. Data type of question is string
    ✓ Test 3. Correct question asked to user
    ✓ Test 4. Data type of correctAnswer is string (1 ms)
    ✓ Test 5. correctAnswer gives the correct answer
    ✓ Test 6. Data type of candidateAnswer is string (1 ms)
    ✓ Test 7. questions array contains 5 questions
    ✓ Test 8. questions contained in questions array end with a trailing space (1 ms)
    ✓ Test 9. correctAnswers array contains 5 answers (1 ms)
    ✓ Test 10. correctAnswers Array contains the correct answers
    ✕ Test 11. gradeQuiz returns a 0 for all wrong answers (27 ms)
    ✕ Test 12. gradeQuiz returns 100 for all correct answers (13 ms)
    ✕ Test 13. gradeQuiz returns 20 for a single correct answer (17 ms)
    ✕ Test 14. gradeQuiz returns 40 for two correct answers (11 ms)
    ✕ Test 15. gradeQuiz returns 60 for three correct answers (10 ms)
    ✕ Test 16. gradeQuiz returns 80 for four correct answers (11 ms)
    ✕ Test 17. gradeQuiz is case insensitive (17 ms)

  ● Candidate Testing solution › Test 11. gradeQuiz returns a 0 for all wrong answers

    expect(received).toBe(expected) // Object.is equality

    Expected: 0
    Received: undefined

      63 |   it("Test 11. gradeQuiz returns a 0 for all wrong answers", function() {
      64 |     solution.candidateAnswers = ["foo", "bar", "baz", "lur", "man"];
    > 65 |     expect(solution.gradeQuiz(solution.candidateAnswers)).toBe(0);
         |                                                           ^
      66 |      });
      67 |
      68 |   it("Test 12. gradeQuiz returns 100 for all correct answers", function() {

      at Object.toBe (test/candidate-testing.test.js:65:59)

  ● Candidate Testing solution › Test 12. gradeQuiz returns 100 for all correct answers

    expect(received).toBe(expected) // Object.is equality

    Expected: 100
    Received: undefined

      68 |   it("Test 12. gradeQuiz returns 100 for all correct answers", function() {
      69 |     solution.candidateAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
    > 70 |     expect(solution.gradeQuiz(solution.candidateAnswers)).toBe(100);
         |                                                           ^
      71 |      });
      72 |
      73 |   it("Test 13. gradeQuiz returns 20 for a single correct answer", function() {

      at Object.toBe (test/candidate-testing.test.js:70:59)

  ● Candidate Testing solution › Test 13. gradeQuiz returns 20 for a single correct answer

    expect(received).toBe(expected) // Object.is equality

    Expected: 20
    Received: undefined

      73 |   it("Test 13. gradeQuiz returns 20 for a single correct answer", function() {
      74 |     solution.candidateAnswers = ["Sally Ride", "bar", "baz", "lur", "man"];
    > 75 |     expect(solution.gradeQuiz(solution.candidateAnswers)).toBe(20);
         |                                                           ^
      76 |      });
      77 |
      78 |   it("Test 14. gradeQuiz returns 40 for two correct answers", function() {

      at Object.toBe (test/candidate-testing.test.js:75:59)

  ● Candidate Testing solution › Test 14. gradeQuiz returns 40 for two correct answers

    expect(received).toBe(expected) // Object.is equality

    Expected: 40
    Received: undefined

      78 |   it("Test 14. gradeQuiz returns 40 for two correct answers", function() {
      79 |     solution.candidateAnswers = ["Sally Ride", "bar", "baz", "lur", "3"];
    > 80 |     expect(solution.gradeQuiz(solution.candidateAnswers)).toBe(40);
         |                                                           ^
      81 |      });
      82 |
      83 |   it("Test 15. gradeQuiz returns 60 for three correct answers", function() {

      at Object.toBe (test/candidate-testing.test.js:80:59)

  ● Candidate Testing solution › Test 15. gradeQuiz returns 60 for three correct answers

    expect(received).toBe(expected) // Object.is equality

    Expected: 60
    Received: undefined

      83 |   it("Test 15. gradeQuiz returns 60 for three correct answers", function() {
      84 |     solution.candidateAnswers = ["Sally Ride", "bar", "40", "lur", "3"];
    > 85 |     expect(solution.gradeQuiz(solution.candidateAnswers)).toBe(60);
         |                                                           ^
      86 |      });
      87 |
      88 |   it("Test 16. gradeQuiz returns 80 for four correct answers", function() {

      at Object.toBe (test/candidate-testing.test.js:85:59)

  ● Candidate Testing solution › Test 16. gradeQuiz returns 80 for four correct answers

    expect(received).toBe(expected) // Object.is equality

    Expected: 80
    Received: undefined

      88 |   it("Test 16. gradeQuiz returns 80 for four correct answers", function() {
      89 |     solution.candidateAnswers = ["Sally Ride", "bar", "40", "Trajectory", "3"];
    > 90 |     expect(solution.gradeQuiz(solution.candidateAnswers)).toBe(80);
         |                                                           ^
      91 |      });
      92 |
      93 |   it("Test 17. gradeQuiz is case insensitive", function() {

      at Object.toBe (test/candidate-testing.test.js:90:59)

  ● Candidate Testing solution › Test 17. gradeQuiz is case insensitive

    expect(received).toBe(expected) // Object.is equality

    Expected: 100
    Received: undefined

      93 |   it("Test 17. gradeQuiz is case insensitive", function() {
      94 |     solution.candidateAnswers = ["sally ride", "TRUE", "40", "TrAjEcToRy", "3"];
    > 95 |     expect(solution.gradeQuiz(solution.candidateAnswers)).toBe(100);
         |                                                           ^
      96 |      });
      97 |
      98 |

      at Object.toBe (test/candidate-testing.test.js:95:59)

Test Suites: 1 failed, 1 total
Tests:       7 failed, 10 passed, 17 total
Snapshots:   0 total
Time:        0.543 s
Ran all test suites.

*/
