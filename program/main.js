var name;
var university;
var githubusername;

var dice1;
var dice2;

var arrCatagories = [
    'Best Consumer Solution',
    'Best Enterprise Solution',
    'Best African Solution',
    'Most Innovative Solution',
    'Best Gaming Solution',
    'Best Health Solution',
    'Best Agricultural Solution',
    'Best Educational Solution',
    'Best Financial Solution',
    'Best Hackathon Solution',
    'Best South African Solution',
    'Best Campus Cup Solution',
];
 // Question A
function logInfo() {
    name = prompt('Enter name');
    university = prompt('Enter university');
    githubusername = prompt('Enter Github Username');

    console.log('My name is ' + name + ', a student from ' + university + ' and my Github username is ' + githubusername);
} 
 // Question B
function rollDice() {
    var total;
    var winner;

    dice1 = Math.floor(Math.random() * 6) + 1;
    dice2 = Math.floor(Math.random() * 6) + 1;

    console.log(dice1 + ', ' + dice2);

    total = dice1 + dice2;
    winner = arrCatagories[total];

    console.log(winner);
    alert(winner);
}
