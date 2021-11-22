let count = 0
/**
 * @description: 假设现在需要设计一个抽奖系统。需要依次从 10 个人中，抽取三等奖 5 名，二等奖 3 名和一等奖 1 名。
 *               请列出所有可能的组合，需要注意的每人最多只能被抽中 1 次。
 * @param {*}
 * @return {*}
 */ 
function choujiang(peoples,result) {
  if(result.length === 9) {
    console.log(result);
    count++
  }
  for(let i = 0; i < peoples.length; i++) {
    const newResult = [].concat(result)
    newResult.push(peoples[i])
    const newPeoples =peoples.slice(i+1)
    choujiang(newPeoples, newResult)
  }
}

function getPeople() {
  const peoples = []
  for(let i = 0; i<10; i++) {
    peoples.push(i)
  }
  return peoples
}

const people = getPeople()

choujiang(people, [])
console.log(count);