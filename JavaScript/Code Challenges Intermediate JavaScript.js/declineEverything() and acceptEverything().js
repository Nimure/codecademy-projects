const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

// Write your code here:
const declineEverything = (string) => {
  string.forEach(politelyDecline);
};

console.log(declineEverything(veggies));

const grudginglyAccept = (veg) => {
    console.log('Ok, I guess I will eat some ' + veg + '.');
};

const acceptEverything = arr => {
  arr.forEach(grudginglyAccept);
  };

console.log(acceptEverything(veggies));