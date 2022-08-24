const team = {
    _players: [{firstName: "Paco", lastName: "Rodríguez", age: 18},
    {firstName: "Paquito", lastName: "Gutiérrez", age: 143},
    {firstName: "Farruco", lastName: "Míguez", age: 23}],
    _games: [{opponent:"New Orleans", teamPoints:13, opponentPoint:13},
      {opponent: "Miami Dolphins", teamPoints:15, opponentPoint:16},
      {opponent: "Chicago Bulls", teamPoints:16, opponentPoint:17}],
    get players(){
      return this._players;
    },
    get games(){
      return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge){
      this._players.push({firstName: newFirstName, lastName: newLastName, age: newAge})
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints){
      this._games.push({opponent:newOpponent, teamPoints:newTeamPoints, opponentPoint:newOpponentPoints});
    },
  };
  team.addPlayer("Bugs", "Bunny", 76);
  console.log(team.players);
  team.addGame("Titans", 100, 98);
  console.log(team.games);