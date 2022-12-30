function generateRandomNumber(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
  }
  
  const falconryWisdom = {
    falconryBirds: ['goshawk', 'peregrine', 'red-tailed hawk', 'red shouldered hawk', 'harris hawk'],
    huntOutput: ['died', 'flew off', 'caught a sock', 'caught a protected species', 'caught a grasshopper', 'caught a squirrel/rabbit'],
    advice: ['go home', 'quit falconry', 'get a new bird', 'keep doing what you\'re doing']
  }
  
  // Store the 'wisdom' in an array
  let personalFalconryWisdom = []

  //interate through the object and create custom message
  const falconry = (obj) => {
    for(let prop in  falconryWisdom) {
        let optionIdx = generateRandomNumber(falconryWisdom[prop].length)

         // use the object's properties to customize the message being added to personalWisdom  
        switch(prop) {
            case 'falconryBirds':
                personalFalconryWisdom.push(`You are flying a ${falconryWisdom[prop][optionIdx]}.`)
                break
            case 'huntOutput':
                personalFalconryWisdom.push(`Your bird: ${falconryWisdom[prop][optionIdx]}.`)
                break
            case 'advice':
                personalFalconryWisdom.push(`You should: ${falconryWisdom[prop][optionIdx]}.`)
                break
            default:
                personalFalconryWisdom.push('There is not enough info.')
    };
  };
};
  falconry(falconryWisdom);
  console.log(personalFalconryWisdom);