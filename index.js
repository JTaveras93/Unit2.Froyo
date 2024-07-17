// vanilla,vanilla,vanilla,strawberry,coffee,coffee

const userInputString = prompt(
    "Please enter a list of comma-separated froyo flavors",
    "vanilla, vanilla, vanilla, strawberry, coffee, coffee"
  );

const stringArray = userInputString.split(",");

console.log("They entered: " + stringArray)

const iceCream = {
    // flavors: ["vanilla", "strawberry", "coffee"]
}

for (let i =0; i< stringArray.length; i++){
  let currentFlavor = stringArray[i];
  if (currentFlavor in iceCream){
    iceCream[currentFlavor] += 1
  } else {
    iceCream[currentFlavor] = 1
  }
}

console.table(iceCream)

