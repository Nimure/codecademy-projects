// Write your code here:
const dogFactory = (name, breed, weight) => {
    return {
      _name: name,
      _breed: breed,
      _weight: weight,
  
      get weight() {
        return this.weight;
       },
  
      get name() {
        return this._name;
      },
  
      get breed() {
        return this.breed;
       },
  
      set name(newName){
        if (typeof newName === 'string'){
          this._name = newName;
        } else {
          console.log('Pass in a string for the dog name')
        }
      },
          
      set breed(newBreed){
        if (typeof newBreed === 'string'){
         this._breed = newBreed;
        } else {
          console.log('Pass in a string for the dog breed')
         }
      }, 
  
      set weight(num){
        if (typeof num === 'number' && num >= 0){
          this._weight = num;
        } else {
          console.log('Pass in a number that is greater than or equal to 0')
        }
      },

      bark() {
        return 'ruff! ruff!'
      },

      eatTooManyTreats() {
        return this._weight ++;
      },
    }
}