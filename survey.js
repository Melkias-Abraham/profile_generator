const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What your name ? Nicknames are also acceptable ", (answer1) => {
  console.log(`Inputed: ${answer1}`);
  rl.question("What's an actvity you like doing? ", (answer2) => {
    console.log(`Inputed: ${answer2}`);
    rl.question("What do you listen to while doing that? ", (answer3) => {
      console.log(`Inputed: ${answer3}`);
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer4) => {
        console.log(`Inputed: ${answer4}`);
        rl.question("What's your favourite thing to eat for that meal? ", (answer5) => {
          console.log(`Inputed: ${answer5}`);
          rl.question("Which sport is your absolute favourite? ", (answer6) => {
            console.log(`Inputed: ${answer6}`);
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer7) => {
              console.log(`${answer1} favourite actvity is ${answer2} while ${answer3}. Their favourite meal is ${answer4}, specifically ${answer5}. This loser's favourite sport is ${answer6} and oddly they think ${answer7} is a superpower lol.`);
              rl.close();

            })
          })
        })
      })
    })
  })
})