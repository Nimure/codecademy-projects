// Write your function here:
const finalGrade = (num1, num2, num3) => {
    if ((num1 < 0 || num1 > 100) || (num2 < 0 || num2 > 100) || (num3 < 0 || num3 > 100)) {
      return 'You have entered an invalide grade.'
    }  
    let aveNum = ((num1 + num2 + num3) / 3)
      if (aveNum <= 59) {
          return 'F'
        } else if (aveNum <= 69) {
          return 'D'
        } else if (aveNum <= 79) {
          return 'C'
        } else if (aveNum <= 89) {
          return 'B'
        } else if (aveNum <= 100) {
          return 'A'
        }
  };
  
  
  
  
  
  // Uncomment the line below when you're ready to try out your function
  console.log(finalGrade(99, 92, 95)) // Should print 'A'
  
  // We encourage you to add more function calls of your own to test your code!
  
  console.log(finalGrade(105, 200, 95))
  console.log(finalGrade(62, 64, 63))
  console.log(finalGrade(-1, 0, -20))