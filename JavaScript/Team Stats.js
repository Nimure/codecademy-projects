const team = {
    _players: [
      {firstname: 'Pete', lastName: 'Wheeler', age: 54},
      {firstname: 'Jonathan', lastName: 'Livingston', age: 40},
      {firstname: 'Lyra', lastName: 'Belacqua', age: 20},
    ],
    _games: [
      {opponent: 'Max Wheeler', teamPoints: 34, opponentPoints: 46},
      {opponent: 'The Seagulls', teamPoints: 55, opponentPoints: 57},
      {opponent: 'The Authority', teamPoints: 68, opponentPoints: 31},
    ],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge) {
      let player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge,
        };
      this._players.push(player);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
      let game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints,
        };
      this._games.push(game)  
    }
  };
  
  team.addPlayer('Bugs', 'Bunny', 76);
  console.log(team.players);
  team.addGame('Titans', 100, 98);
  console.log(team.games);