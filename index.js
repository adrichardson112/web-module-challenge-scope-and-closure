// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2? Counter 1 is nesting a function within a function as opposed 
 * to counter 2 is using closure to declare "count" outside the function.
 * 
 * 2. Which of the two uses a closure? How can you tell? Counter 2 because it's declaring count outside the function.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * counter 1 is preferrable when wanting to change or add counts since it's nested within the function. Counter 2 would be
 * preferrable for completing one function. 
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning() {
  return Math.random() * 2 + 0;
}
console.log("Home",inning());

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(numInnings, inningFunction){
  let homeTeam = 0;
  let awayTeam = 0;
  for(let i = 0; i< numInnings; i++){
    homeTeam = homeTeam + inning();
    awayTeam = awayTeam + inning();
  }
return {"Home": homeTeam, "Away": awayTeam};
}
console.log(finalScore(8, inning));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */


function scoreboard(numbInnings, getInningScore, inning) {
  let score = 0;
  return function getInningScore () {
    score ++;
    return `${numbInnings}: awayTeam - homeTeam`;
  }
getInningScore();
}
console.log(scoreboard(3, getInningScore, inning));

function scoreboard(numInnings, getInningScore, inningFunction) {
  const results = [];
  const final = {"Home": 0, "Away": 0};
  for(let i = 0; i< numInnings; i++){
    const obj = Object.assign({"inning": i + 1}, getInningScore(1, inningFunction));
    results.push('Inning ${obj.inning}: ${final.Away} - ${final.Home}');
    final["Home"] += obj.Home;
    final["Away"] += obj.Away;
  }
  results.push('Final Score: ${final.Away} - ${final.Home');
  return results;
}