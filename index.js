// Code your solutions in this file
const writeCards = (array, message) => {
  let messages = [];
  for (let name of array) {
    messages.push(`Thank you, ${name}, for the wonderful ${message} gift!`);
  }

  return messages;
};

const countDown = (num) => {
  for (let i = num; i >= 0; i--) {
    console.log(i);
  }
};

