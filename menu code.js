const menu = {
    _course: { 
      appetizers: [],
      mains: [],
      secondMain: [],
      desserts: []
    },
    get appetizers() {
      return this._course.appetizers;
    },
    set appetizers(appetizers) {
      this._course.appetizers = appetizers;
    },
    get mains() {
      return this._course.mains;
    },
    set mains(mains) {
      this._course.mains = mains;
    },
    get secondMain() {
      return this._course.secondMain;
    },
    set secondMain(secondMain) {
      this._course.secondMain = secondMain;
    },
    get desserts() {
      return this._course.desserts;
    },
    set desserts(desserts) {
      this._course.desserts;
    },
    get courses() {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        secondMain: this.secondMain,
        desserts: this.desserts,
      };
    },
    addDishToCourse(courseName, dishName, dishPrice) { const dish = {
      name: dishName,
      price: dishPrice,
    };
   return this._course[courseName].push(dish);
    
    },
    getRandomDishFromCourse(courseName) {
    const dishes = this._course[courseName];
    const randomDish = Math.floor(Math.random() * dishes.length);
    return dishes[randomDish];
    },
    generateRandomMeal() {
      const appetizers = this.getRandomDishFromCourse('appetizers');
      const mains = this.getRandomDishFromCourse('mains');
      const secondMain = this.getRandomDishFromCourse('secondMain');
      const desserts = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizers.price + mains.price + secondMain.price + desserts.price;
      return `The appetizer is ${appetizers.name}, the main is ${mains.name}, the second main is ${secondMain.name}, the dessert is ${desserts.name} and the total for your meal will be ${totalPrice}`;
    }
  };
  
  menu.addDishToCourse('appetizers', 'gyoza', 6.50);
  menu.addDishToCourse('appetizers', 'prawn tempura', 7.50);
  menu.addDishToCourse('appetizers', 'spring rolls', 4.95);
  
  menu.addDishToCourse('mains', 'smoked salmon garlic roll', 7.50);
  menu.addDishToCourse('mains', 'crazy girl roll', 8.50);
  menu.addDishToCourse('mains', 'bc roll', 5.95);
  menu.addDishToCourse('secondMain', 'philadelphia roll', 9.95);

  menu.addDishToCourse('secondMain', 'vernon roll', 9.95);
  menu.addDishToCourse('secondMain', 'spicy cheese roll', 10.95);
  menu.addDishToCourse('secondMain', 'crunchy house roll', 7.50);
  
  menu.addDishToCourse('desserts', 'melon-pan', 7.44);
  menu.addDishToCourse('desserts', 'machi ball', 4.44);
  menu.addDishToCourse('desserts', 'cats', 55.80);
  
  
  const meal = menu.generateRandomMeal();
  console.log(meal);
  