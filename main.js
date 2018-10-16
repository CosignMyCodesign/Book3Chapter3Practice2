let bandNumber = 0   // Had to change original variable from const to let so I could increment within the function, also changed the value from 1 to 0. Need to ask how to do this practice without changing the original code.

const takeNumber = function (bandName) {
  bandNumber++;
  return bandNumber + ". " + bandName;
}

const scum = takeNumber("Galactic Scum")
console.log(scum)  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs")
console.log(under)  // This should print "2. Underdogs" in the console