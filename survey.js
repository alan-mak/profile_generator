const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name?', (name) => {
  rl.question('Whats an activity you like doing?', (activity) => {
    rl.question('What do you listen to while doing this?', (song) => {
      rl.question('Which meal is your favourtite?', (meal) => {
        rl.question("What's your favourite thing to eat for that meal?", (food) => {
          rl.question('Which sport is your absolute favourite?', (sport) => {
            rl.question('What is your  superpower? Tell us what you are amazing at!', (superpower) => {
              console.log(`Hello ${name}. I see you like to do ${activity} while listening to ${song}. Your favourite meal is ${meal}. You like to eat ${food}. Your favourite sport is ${sport}. You have an amazing superpower the power of ${superpower}.`);
              rl.close();
            })
          })
        })
      })
    })
  })
});
