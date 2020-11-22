/**
 * @param {number[]} piles
 * @return {number}
 */
const maxCoins = function(piles) {
  piles = piles.sort(function(a, b){ return b-a});
  // base case if there are only 3 that means 1 pair
  if(piles.length === 3){
    return piles[1];
  }
  // bob's entries as he doesn't get to pick he will always get the worst pick in each pair
  const howMuchToRemove = Math.floor(piles.length/3);
  // removing bob's entries
  piles = piles.slice(0, piles.length - howMuchToRemove);
  let sum = 0;
  // remaining 2nd maximum will be our's so adding that
  for(let i = 0; i < piles.length; i++){
    if(i%2 !== 0){
      sum = sum + piles[i];
    }
  }
  return sum;
};

console.log(maxCoins([2,4,1,2,7,8])); //9
