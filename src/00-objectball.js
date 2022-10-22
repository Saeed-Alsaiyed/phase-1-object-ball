const gameObject = () =>{
    return {home:{
        teamName: "Brooklyn Nets",
        colors: ["Black","White"],
        players: {
            "Alan Anderson": {Number: 0, Shoe: 16, Points: 22, Rebounds: 12, Assists: 12, Steals: 3, Blocks: 1, SlumDunks: 1 },
            "Reggie Evans": {Number: 30, Shoe: 14, Points: 12, Rebounds: 12, Assists: 12, Steals: 12, Blocks: 12, SlumDunks: 7 },
           "Brook Lopez": {Number: 11, Shoe: 17, Points: 17, Rebounds: 19, Assists: 10, Steals: 3, Blocks: 1, SlumDunks: 15 },
            "Mason Plumlee": {Number: 1, Shoe: 19, Points: 26, Rebounds: 12, Assists: 6, Steals: 3, Blocks: 8, SlumDunks: 5 },
            "Jason Terry": {Number: 31, Shoe: 15, Points: 19, Rebounds: 2, Assists: 2, Steals: 4, Blocks: 11, SlumDunks: 1 }
        }
    },
    away:{
        teamName: "Charlotte Hornets",
        colors: ["Turquoise","Purple"],
        players: {
            "Jeff Adrien": {Number: 4, Shoe: 18, Points: 10, Rebounds: 1, Assists: 1, Steals: 2, Blocks: 7, SlumDunks: 2 },
            "Bismak Biyombo": {Number: 0, Shoe: 16, Points: 12, Rebounds: 4, Assists: 7, Steals: 7, Blocks: 15, SlumDunks: 10 },
           "DeSagna Diop": {Number: 2, Shoe: 14, Points: 24, Rebounds: 12, Assists: 12, Steals: 4, Blocks: 5, SlumDunks: 5 },
            "Ben Gordon": {Number: 8, Shoe: 15, Points: 33, Rebounds: 3, Assists: 2, Steals: 1, Blocks: 1, SlumDunks: 0 },
            "Brendan Haywood": {Number: 33, Shoe: 15, Points: 6, Rebounds: 12, Assists: 12, Steals: 22, Blocks: 5, SlumDunks: 12 }
        }
        }
}
};

const numPointsScored = (playersName) => {
    const obj = gameObject();
    for (const key in obj) {
      const value = obj[key];
      const foundedPlayer = value.players[playersName];
      if (foundedPlayer) {
        return foundedPlayer.points;
      }
    }
  };

  console.log(numPointsScored('Alan Anderson'));

  const shoeSize = (playersName) => {
    const obj = gameObject();
    for (const key in obj) {
      const value = obj[key];
      const foundedPlayer = value.players[playersName];
      if (foundedPlayer) {
        return foundedPlayer.shoe;
      }
    }
  };
  console.log(shoeSize('Alan Anderson'));

  const teamColors = (teamName) => {
    const obj = gameObject();
    for (const key in obj) {
      const value = obj[key];
      if (value.teamName === teamName) {
        const newValue = obj[key];
        return newValue.colors;
      }
    }
  };

  console.log(teamColors('Charlotte Hornets'));

