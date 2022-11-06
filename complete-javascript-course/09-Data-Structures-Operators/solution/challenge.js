/* -------- Coding Challenge 1 -------- */
// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski"
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze"
//     ]
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5
//   }
// };

// // Ex 1
// const [players1, players2] = game.players;
// console.log(players1, players2);
// // Ex 2
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);
// // Ex 3
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);
// // Ex 4
// const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
// console.log(players1);
// // Ex 5
// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, team2, draw);
// // Ex 6
// const printGoals = function (score, ...scored) {
//   console.log(score);
//   for (let i = 0; i < scored.length; i++) {
//     const scoredPlayer = scored[i];
//     console.log(scoredPlayer);
//   }
// };
// printGoals(game.score, ...game.scored);
// // Ex 7
// team1 < team2 && console.log("Team 1 wins");
// team2 < team1 && console.log("Team 2 wins");
// team1 === team2 && console.log("Draw!");

/* -------- Coding Challenge 2 -------- */
// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski"
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze"
//     ]
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5
//   }
// };

// // Ex 1
// for (const [i, scoredPlayer] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}: ${scoredPlayer}`);
// }
// // Ex 2
// let sum = 0;
// const oddValues = Object.values(game.odds);
// for (const oddValue of oddValues) {
//   sum += oddValue;
// }
// console.log(`Average odd: ${Math.floor((sum / oddValues.length) * 100) / 100}`);
// // Ex 3
// for (const [winner, odd] of Object.entries(game.odds)) {
//   // console.log(winner, odd);
//   console.log(
//     `Odd of ${game[winner] ? `victory ${game[winner]}` : `draw`}: ${odd}`
//   );
// }
// // Ex 4
// const scoredPlayers = game.scored;
// const scorer = {};
// for (const scoredPlayer of scoredPlayers) {
//   scorer[scoredPlayer] = scorer[scoredPlayer] ? scorer[scoredPlayer] + 1 : 1;
// }
// console.log(scorer);
