// Write your code here:

const reverseArray = (array) => {
    let reversed = [];
    for (let i = array.length-1; i >= 0; i--) {
         reversed.push(array[i]);
    }
     return reversed
  };
  
  
  
  
  
  
  // When you're ready to test your code, uncomment the below and run:
   
  const sentence = ['sense.','make', 'all', 'will', 'This'];
  
  console.log(reverseArray(sentence)) 
  // Should print ['This', 'will', 'all', 'make', 'sense.'];