const menu = {
  _courses: {
  appetizers: [],
  mains: [],
  desserts: []
},
  get appetizers (){
    return this._course.appetizers;
  },
  set appetizers(appetizerIn) {
 this._course.appetizers = appetizerIn;
  },

  get mains(){
    return this._course.mains;
  },
  set mains(mainsIn){
  this._course.mains = mainsIn;
  },
  get desserts (){
    return this._course.desserts;
  },
  set desserts (dessertsIn){
  this._course.desserts = dessertsIn;
  },
  get courses (){
    return {
      appetizers: this.appitizers,
      mains: this.mains,
      desserts: this.deserts
    }
  },
  addDishToCourse(courseName, dishName, dishPrice){
    const dish = {
      name: [dishName],
      price: [dishPrice]
    };

    return  this._courses[courseName].push(dish)
  },
  getRandomDishFromCourse(courseName){
    // console.log(courseName)
     const dishes = this._courses[courseName];
    // console.log(dishes)
   const randomIndex = Math.floor(Math.random() * dishes.length);
 return  dishes[randomIndex]
  },
  generateRandomMeal(){
    const appetizers = this.getRandomDishFromCourse('appetizers');
    const mains = this.getRandomDishFromCourse('mains');
    const desserts = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizers.price +  mains.price + desserts.price

    return `Your meal is ${appetizers.name}, ${mains.name}, ${desserts.name}. The price is ${totalPrice}.`
  }
}

menu.addDishToCourse('appetizers', 'Caesar Salad', 4);
menu.addDishToCourse('appetizers', 'Some Salad', 5);
menu.addDishToCourse('appetizers', 'Salad', 7);

menu.addDishToCourse('mains', 'tomato', 2);
menu.addDishToCourse('mains', 'banana', 3);
menu.addDishToCourse('mains', 'apple', 5);

menu.addDishToCourse('desserts', 'ice cream', 5);
menu.addDishToCourse('desserts', 'cake', 2);
menu.addDishToCourse('desserts', 'candy', 7);
// console.log(menu._courses['appetizers'])
let meal = menu.generateRandomMeal();
console.log(meal);
