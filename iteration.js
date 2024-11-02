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

const Number = [170, 235, 465, -92, 6, 912, 0, 889, 201, 933];
let maximumNumber = Number[0];
for (let i = 1; i < Number.length; i++) {
    if (Number[i] > maximumNumber) {
        maximumNumber = Number[i];
    }
}
console.log(maximumNumber);