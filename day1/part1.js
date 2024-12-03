const fs = require("fs");

const textFile = fs.readFileSync("./day1/day1-input.txt");
const textByLine = textFile.toString().split("\n");

const arr1 = [];
const arr2 = [];
let distanceCount = 0;

for (let i = 0; i < textByLine.length; i++) {
  const firstListNum = textByLine[i].split("   ")[0];
  const secondListNum = textByLine[i].split("   ")[1];

  arr1.push(parseInt(firstListNum));
  arr2.push(parseInt(secondListNum));
}

arr1.sort();
arr2.sort();

for (let i = 0; i < arr1.length; i++) {
  distanceCount += Math.abs(arr1[i] - arr2[i]);
}

console.log(distanceCount);
