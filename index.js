// Function to generate thank you cards
function writeCards(names, event) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
  }
  
  // Function for counting down from a given number to 0
  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  
  // Examples in use:
  console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));
  countDown(10);
  