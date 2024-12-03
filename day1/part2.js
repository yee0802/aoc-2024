const fs = require("fs");

const textFile = fs.readFileSync("./day1/day1-input.txt");
const textByLine = textFile.toString().split("\r\n");

const arr1 = [];
const arr2 = [];
let simalarityScore = 0;

for (let i = 0; i < textByLine.length; i++) {
  const firstListNum = textByLine[i].split("   ")[0];
  const secondListNum = textByLine[i].split("   ")[1];

  arr1.push(parseInt(firstListNum));
  arr2.push(parseInt(secondListNum));
}

for (let i = 0; i < arr1.length; i++) {
  const arr1Num = arr1[i];
  const count = arr2.filter((num) => num === arr1Num).length;

  simalarityScore += arr1Num * count;
}

console.log(simalarityScore);
