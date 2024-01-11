//****************************************************************************************
//
//
//    Filename:    candidate-testing.js
//    Date:        10 January 2024
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
let questions;
let correctAnswers;
let candidateAnswers;

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
  candidateAnswer = input.question(question);
}

//****************************************************************************************

function gradeQuiz(candidateAnswers)
{
  // TODO 1.2c: Let the candidate know if they have answered
  if (candidateAnswer == correctAnswer)
  {
    console.log("Correct!");
  }
  else
  {
    console.log("Incorrect!");
  }

  let grade;  //TODO 3.2 use this variable to calculate the candidates score.

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

if(require.main === module)
{
  runProgram();
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
npm test

> candidate-testing@1.0.0 test
> jest

  console.log
    Incorrect!

      at Object.log [as gradeQuiz] (candidate-testing.js:54:16)

  console.log
    Incorrect!

      at Object.log [as gradeQuiz] (candidate-testing.js:54:16)

  console.log
    Incorrect!

      at Object.log [as gradeQuiz] (candidate-testing.js:54:16)

  console.log
    Incorrect!

      at Object.log [as gradeQuiz] (candidate-testing.js:54:16)

  console.log
    Incorrect!

      at Object.log [as gradeQuiz] (candidate-testing.js:54:16)

  console.log
    Incorrect!

      at Object.log [as gradeQuiz] (candidate-testing.js:54:16)

  console.log
    Incorrect!

      at Object.log [as gradeQuiz] (candidate-testing.js:54:16)

 FAIL  test/candidate-testing.test.js
  Candidate Testing solution
    ✓ Test 1. Data type of candidateName is string (2 ms)
    ✓ Test 2. Data type of question is string
    ✓ Test 3. Correct question asked to user
    ✓ Test 4. Data type of correctAnswer is string
    ✓ Test 5. correctAnswer gives the correct answer
    ✓ Test 6. Data type of candidateAnswer is string
    ✕ Test 7. questions array contains 5 questions (1 ms)
    ✕ Test 8. questions contained in questions array end with a trailing space (1 ms)
    ✕ Test 9. correctAnswers array contains 5 answers
    ✕ Test 10. correctAnswers Array contains the correct answers
    ✕ Test 11. gradeQuiz returns a 0 for all wrong answers (19 ms)
    ✕ Test 12. gradeQuiz returns 100 for all correct answers (2 ms)
    ✕ Test 13. gradeQuiz returns 20 for a single correct answer (1 ms)
    ✕ Test 14. gradeQuiz returns 40 for two correct answers (1 ms)
    ✕ Test 15. gradeQuiz returns 60 for three correct answers (2 ms)
    ✕ Test 16. gradeQuiz returns 80 for four correct answers (1 ms)
    ✕ Test 17. gradeQuiz is case insensitive (1 ms)

  ● Candidate Testing solution › Test 7. questions array contains 5 questions

    TypeError: Cannot read properties of undefined (reading 'length')

      35 |   // questions tests //
      36 |      it("Test 7. questions array contains 5 questions", function() {
    > 37 |              expect(solution.questions.length).toBe(5);
         |                                        ^
      38 |      });
      39 |
      40 |   it("Test 8. questions contained in questions array end with a trailing space", function() {

      at Object.length (test/candidate-testing.test.js:37:29)

  ● Candidate Testing solution › Test 8. questions contained in questions array end with a trailing space

    expect(received).toContain(expected) // indexOf

    Matcher error: received value must not be null nor undefined

    Received has value: undefined

      39 |
      40 |   it("Test 8. questions contained in questions array end with a trailing space", function() {
    > 41 |              expect(solution.questions).toContain("Who was the first American woman in space? ");
         |                                         ^
      42 |     expect(solution.questions).toContain("True or false: 5 kilometer == 5000 meters? ");
      43 |     expect(solution.questions).toContain("(5 + 3)/2 * 10 = ? ");
      44 |     expect(solution.questions).toContain("Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ");

      at Object.toContain (test/candidate-testing.test.js:41:30)

  ● Candidate Testing solution › Test 9. correctAnswers array contains 5 answers

    TypeError: Cannot read properties of undefined (reading 'length')

      48 |   // correctAnswers tests //
      49 |      it("Test 9. correctAnswers array contains 5 answers", function() {
    > 50 |              expect(solution.correctAnswers.length).toBe(5);
         |                                             ^
      51 |      });
      52 |
      53 |   it("Test 10. correctAnswers Array contains the correct answers", function() {

      at Object.length (test/candidate-testing.test.js:50:34)

  ● Candidate Testing solution › Test 10. correctAnswers Array contains the correct answers

    expect(received).toContain(expected) // indexOf

    Matcher error: received value must not be null nor undefined

    Received has value: undefined

      52 |
      53 |   it("Test 10. correctAnswers Array contains the correct answers", function() {
    > 54 |              expect(solution.correctAnswers).toContain("Sally Ride");
         |                                              ^
      55 |     expect(solution.correctAnswers).toContain("true");
      56 |     expect(solution.correctAnswers).toContain("40");
      57 |     expect(solution.correctAnswers).toContain("Trajectory");

      at Object.toContain (test/candidate-testing.test.js:54:35)

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
Tests:       11 failed, 6 passed, 17 total
Snapshots:   0 total
Time:        0.454 s
Ran all test suites.

 */
