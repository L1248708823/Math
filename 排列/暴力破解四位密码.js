const word = ['a','b','c','d','e']
const result = []
let count = 0
function parsePassowrd(result, len) {
  if(len === 0){
    // console.log(result);
    count++
    return
  }
  for(let i=0; i < word.length; i++) {
    const newResult = [].concat(result)
    newResult.push(word[i]) 
    const newLen = len - 1
    parsePassowrd(newResult, newLen)
  }
}

parsePassowrd([], word.length)
console.log(count);