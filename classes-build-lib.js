class Media {

  construсtor(title){
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title (){
    return this._title;
  }
  get isCheckedOut (){
    return this._isCheckedOut;
  }
  get ratings (){
    return this._ratings;
  }
  set isCheckedOut(value){
    this._isCheckedOut = value;
  }

  toggleCheckOutStatus(){
    return this.isCheckedOut = !this.isCheckedOut;
  }
  getAverageRating(){
    let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating);
    return  ratingsSum /this.ratings.length;
  }
  addRating(value){
    this.ratings.push(value)
  }
}

class Book extends Media {
  constructor(author,title,pages){
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author(){
    return  this._author
  }
  get pages(){
    return this._pages;
  }
}

// class Movie extends Media{
//   construcor(director, title, runTime){
//     super(title);
//     this._director = director;
//     this._runTime = runTime;
//   }
//   get director(){
//     return this._director;
//   }
//   get runTime(){
//     return this._runTime;
//   }
// }

const historyOfEverything = new Book('Bill Bryson','A Short History of Nearly Everything', 544);

historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
// class CD extends Media{
//   construcor(){
//     super(title);
//     this._artist = artist;
//     this._songs = songs;
//   }
//   get artist(){
//     return this._artist;
//   }
//   get songs(){
//     return this._songs;
//   }
// }
