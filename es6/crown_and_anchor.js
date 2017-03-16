// returns a random integer in the range [m, n] (inclusive)
function rand(m, n) {
  return m + Math.floor((n - m + 1) * Math.random());
}
// randomly returns a string representing one of the six
// Crown and Anchor faces
function randFace() {
  return ["crown", "anchor", "heart", "spade", "club", "diamond"][rand( 0, 5)];
}

let funds = 50; // starting conditions
let round = 0;

// stop playing when broke or when reach 100p
while(funds > 0 && funds < 100) {  // FIX: original quit at 1p
  round++;
  console.log(`round ${round}: `);
  console.log(`\tstarting funds: ${funds} p`);

  // place bets
  let bets = { crown: 0, anchor: 0, heart: 0, spade: 0, club: 0, diamond: 0 };
  let totalBet = rand(1, funds);
  if (totalBet === 7) {
    bets.heart = totalBet;
  } else {
    // distribute total bet
    let remaining = totalBet;
    do {
      let bet = rand(1, remaining);
      let face = randFace();
      bets[face] = bets[face] + bet;
      remaining = remaining - bet;
    } while (remaining > 0);
  }
  funds = funds - totalBet;
  console.log('\tbets: ' + Object.keys(bets).map(face => `[${face}: ${bets[face]}p]`).join(' ') + ` (total: ${totalBet}p)`);

  // roll dice
  const hand = [];
  for (let roll = 0; roll < 3; roll++) {
    hand.push(randFace());
  }
  console.log(`\thand: ${hand.join(', ')}`);

  // collect winnings
  let winnings = 0;
  for (let die = 0; die < hand.length; die++) {
    let face = hand[die];
    if (bets[face] > 0)
      winnings = winnings + bets[face];
  }
  funds = funds + winnings;

  // and retain winning bets -- FIX: this was left out of original
  let winners = [...new Set(hand)];  // because the die can repeat, use Set to unique the die
                     // array so that winning bets are only recovered once
  let retain = 0;
  for (let face of winners) {
    retain = retain + bets[face];
  }
  funds = funds + retain;
  let take = winnings + retain;
  console.log(`\twinnings: ${winnings}p (take: ${take}p)`);
}
console.log(`\tending funds: ${funds}`);
