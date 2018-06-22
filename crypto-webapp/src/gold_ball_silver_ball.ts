
/**
 * Yes, this is a retarded way of doing it.
 * I don't care.
 */
let boxes= [
    ['silver', 'silver'],
    ['gold', 'silver'],
    ['gold', 'gold'],
];

// 2nd ball IS gold
let successCount : number = 0;

// 2nd ball ISNT gold
let failCount : number = 0;

// Total attempts where the first ball is gold
let total : number = 0;

// Run the test 100,000 times
for (let i = 0; i < 100000;  i++){

    // Choose a random box
    let randomBox = Math.floor(Math.random() * 3);

    // Choose a random ball in that box
    let randomBall = Math.floor(Math.random() * 2);

    // If the first ball is gold
    if (boxes[randomBox][randomBall] === 'gold'){

        // If the second ball is gold
        let index = randomBall === 1 ? 0 : 1;
        if (boxes[randomBox][index] === 'gold'){
            successCount++;
        } else {
            failCount++;
        }
        total++;
    }
}

// Log the ratio
console.log('Success rate: ' + ((successCount / total) * 100) + '%');
console.log('Fail rate: ' + ((failCount / total) * 100) + '%');