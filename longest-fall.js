"use stict";

/* Return the length of the longest consecutive decrease in ints */
function longestFall(ints) {
  if (ints.length === 0) return 0;

  consecFall = 1;
  longestConsecFall = 1;

  for ( let i=0; i<ints.length-1; i++ ) {
    if (ints[i+1] < ints[i]) {
      consecFall++;
      longestConsecFall = Math.max(longestConsecFall, consecFall);
    } else {
      consecFall = 1;
    }

  }

  return longestConsecFall;

}
