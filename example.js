const string = 'hello there how are you';

const myObj = {}

for (let i =0; i< string.length; i++){
  let currentLetter = string[i]
  if (currentLetter in myObj){
    myObj[currentLetter] += 1
  } else {
    myObj[currentLetter] = 1
  }
}
console.log(myObj)