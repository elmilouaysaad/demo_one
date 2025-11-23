const rankOrder = ["ace","2","3","4","5","6","7","8","9","10","jack","queen","king"];
const rIndex = (rank) => rankOrder.indexOf(rank);

function isTirsi(group) {
  if (group.length < 3 || group.length > 4) return false;
  let jokers = group.filter(c => c.rank.includes("joker"));
  if (jokers.length > 1) return false;
  let real = group.filter(c => !c.rank.includes("joker"));
  let ranks = [...new Set(real.map(c => c.rank))];
  if (ranks.length !== 1) return false;
  let suits = real.map(c => c.suit);
  if ([...new Set(suits)].length !== suits.length) return false;
  return true;
}

function isFreeTirsi(group) {
  return isTirsi(group) && !group.some(c => c.rank.includes("joker"));
}

function isSuivi(group) {
  if (group.length < 3) return false;
  let jokers = group.filter(c => c.rank.includes("joker"));
  if (jokers.length > 1) return false;
  let real = group.filter(c => !c.rank.includes("joker"));
  let suits = [...new Set(real.map(c => c.suit))];
  if (suits.length !== 1) return false;
  let sorted = [...real].sort((a,b)=>rIndex(a.rank)-rIndex(b.rank));
  let gaps = 0;
  for (let i = 0; i < sorted.length - 1; i++) {
    let diff = rIndex(sorted[i+1].rank) - rIndex(sorted[i].rank);
    if (diff === 1) continue;
    if (diff > 2) return false;
    gaps++;
    if (gaps > jokers.length) return false;
  }
  let includesA = real.some(c => c.rank === "ace");
  if (includesA && real.length >= 3) {
    let idxs = real.map(c => rIndex(c.rank));
    if (Math.min(...idxs) === 0 && Math.max(...idxs) >= 2) return false;
  }
  return true;
}

function isFreeSuivi(group) {
  return isSuivi(group) && !group.some(c => c.rank.includes("joker"));
}

export function canDeclareWin(groups) {
  let total = groups.reduce((s,g)=>s+g.length,0);
  if (total !== 13) return false;
  let validGroups = groups.every(g => isTirsi(g) || isSuivi(g));
  if (!validGroups) return false;
  if (!groups.some(isFreeTirsi)) return false;
  if (!groups.some(isFreeSuivi)) return false;
  return true;
}
