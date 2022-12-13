const input = 'A whale of a deal';
const vowels = ['a', 'e', 'i', 'o', 'u'];

const resultArray = [];

/* for loop runs through every letter in the string. 2nd for loop runs through every index in array, compares. Saves like letters in resultArray. Then added if statements in first for loop to double U and E. Commented out logs were to check loops */
for (let i = 0; i < input.length; i++){
  if (input[i] === 'e') {
    resultArray.push(input[i]);
  }
  if (input[i] === 'u') {
    resultArray.push(input[i]);
  }
  for (let j=0; j < vowels.length; j++){
    if (input[i] === vowels[j]){
      //console.log(input[i]);
      resultArray.push(input[i]);
    }
   // console.log('j is '+ j);
  }
  //console.log(input[i]);
}

const resultString = resultArray.join('').toUpperCase();
console.log(resultString);