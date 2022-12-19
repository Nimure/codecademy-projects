const menu = {
    _meal: '',
    _price: 0,
    set meal(mealToCheck) {
      if (typeof mealToCheck === 'string') {
        return this._meal = mealToCheck;
      }
    },
    set price(priceToCheck) {
      if (typeof priceToCheck === 'number') {
        return this._price = priceToCheck;
      }
    },
    get todaysSpecial() {
      if (this._meal && this._price) {
        return `Today's Special is ${this._meal} for \$${this._price}!`
      } else {
        return 'Meal or price was not set correctly!'
      }
    },
  }
  
  /* test showing why values should not be changed
  menu._meal = 0;
  menu._price = "test"
  console.log(menu); */
   menu.meal = 'pizza';
   menu.price = 5;
  // console.log(menu);
  
  console.log(menu.todaysSpecial);