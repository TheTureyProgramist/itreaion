const turkeyNumb = [597, -397, 182];
turkeyNumb[1] = 10;
console.log(turkeyNumb); 

const turkey = ["RoyalTurkey", "WhiteTurkey", "GreyTurkey"];
turkey[3] = "BlackTurkey";
console.log(turkey); 

const numIteration = [-27, 95, 27, 190];
let numSum = 0;
for (let i = 0; i < numIteration.length; i++) {
    numSum += numIteration[i];
}
console.log(numSum);

const fiveNumb = [39, 76, 51, 79, 53];
for (let a = 0; a < fiveNumb.length; a++) {
    console.log(fiveNumb[a]);
}

const Number = [10, 23, 45, 32, 67, 12, 54, 89, 21, 33];
let maximumNumber = Number[0];
for (let i = 1; i < Number.length; i++) {
    if (Number[i] > maximumNumber) {
        maximumNumb = Number[i];
    }
}
console.log(maximumNumb);