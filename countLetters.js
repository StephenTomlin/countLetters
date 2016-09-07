function createKeys(str) {
  var uniqueCounter = {};
  var noSpaces = str.split(' ').join('');
  for(var i = 0;i< noSpaces.length;i++) {
    if (uniqueCounter[noSpaces[i]] === undefined) {
      uniqueCounter[noSpaces[i]] = 1;
    }
    else {
      uniqueCounter[noSpaces[i]] += 1;
    }
  }
  return uniqueCounter;
}

console.log(createKeys("Lighthouse in the house"))