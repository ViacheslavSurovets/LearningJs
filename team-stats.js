const team = {
  _players: [{
  firstName: 'Pablo',
  lastName: 'Sanchez',
  age: 11
},{
  firstName: 'Padle',
  lastName: 'Sanche',
  age: 12
},{
  firstName: 'Plo',
  lastName: 'Shez',
  age: 10
}],
  _games: [{
  opponent: 'Broncos',
  teamPoints: 42,
  opponentPoints: 27
},{
  opponent: 'Bros',
  teamPoints: 50,
  opponentPoints: 10
},{
  opponent: 'Bocos',
  teamPoints: 25,
  opponentPoints: 58
}],
  get players (){
    return this._players
  },
  get games (){
    return this._games
  },
  addPlayer(firstName, lastName, age){
    const newPlayer = {
      firstName,
      lastName,
      age
    }
    this._players.push(newPlayer);
  },
  addGame(opponent, teamPoints, opponentPoints){
    const game = {
      opponent,
      teamPoints,
      opponentPoints
    };
    this.games.push(game)
  }
};

team.addPlayer('Steph','Curry', 28);
team.addPlayer('Lisa','Leslie', 44);
team.addPlayer('Bugs','Bunny', 76);

// console.log(Object.entries(team._players))

team.addGame('Titans', 55, 53);
team.addGame('Tans',36, 45);
team.addGame('Tit',37, 47);

// console.log(Object.entries(team._games))
