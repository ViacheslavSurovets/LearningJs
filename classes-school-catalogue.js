class School {
  constructor(name, level, numberOfStudents){
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  get name (){
  return  this._name
  }

   get level (){
  return  this._level
  }

   get numberOfStudents (){
  return  this._numberOfStudents
  }

  set numberOfStudents(value){
    if(value.isNAN()){
      console.log ('Invalid input')
    } else {
      this._numberOfStudents = value;
    }
  }

quickFacts(){
  console.log(`${this.name} educates ${this.numberOfStudents} at the ${this.level} school level`)
}
 static pickSubstituteTeacher(substituteTeachers){
    const randInt = Math.floor(Math.random()*substituteTeachers.length );
   return substituteTeachers[randInt]
  }
}

class Primare extends School{
  constructor(name, numberOfStudents, pickupPolicy){
    super(name, 'primary', numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy(){
    return this._pickupPolicy
  }
}

class Middle extends School{
  constructor(name, numberOfStudents){
    super(name, 'middle', numberOfStudents);
  }
}

class High extends School{
  constructor(name, numberOfStudents, sportsTeams){
    super(name, 'high', numberOfStudents);
    this._sportsTeams = sportsTeams;
  }

  get sportsTeams(){
    return this._sportsTeams;
  }
}

const lorraineHansbury = new School('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.')
// console.log(lorraineHansbury);
lorraineHansbury.quickFacts();
School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);

const alSmith = new High('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

console.log(alSmith)
