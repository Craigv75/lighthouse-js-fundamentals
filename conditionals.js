/* If Statement */

const raining = true;
const cold = false;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");

/* If Else Statement */

if (cold) {
  console.log("Make sure you pick out a scarf!");
} else {
  console.log("Short sleeves are fine.");
}

/* Else If Statement */

const temperature = 12;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");

/* Logical Operators - And*/ 

const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}

/* Logical Operators - Or */

if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}


/* Logical Operators - Not */

if (!raining) {
  console.log("Leave your umbrella at home!");
}
