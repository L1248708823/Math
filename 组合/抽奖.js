let count = 0
function arrayAminusB(arrA, arrB){
  return arrA.filter(v => !arrB.includes(v));
}
/**
 * @description: 假设现在需要设计一个抽奖系统。需要依次从 5个人中，抽取三等奖 2 名，二等奖 2 名和一等奖 1 名。
 *               请列出所有可能的组合，需要注意的每人最多只能被抽中 1 次。
 * @param selectNumber 已经从获奖中选中的人数
 * @param award 奖励
 * @return {*}
 */
function choujiang(
  peoples,
  result,
  selectNumber,
  award,
  once
) {
  if (
    selectNumber === 1 &&
    award == 1
  ) {
    const newResult = [].concat(result)
    // newResult.push(peoples[i])
    // const newPeoples =peoples.slice(i+1)
    choujiang(peoples, newResult,0, 2, true)
  } else if (
    selectNumber === 2 &&
    award == 2
  ) {
    const newResult = [].concat(result)
    // newResult.push(peoples[i])
    // const newPeoples =peoples.slice(i+1)
    choujiang(peoples, newResult, 0, 3,true)
  } else if (
    selectNumber === 2 &&
    award == 3
  ) {
    const newResult = [].concat(result)
    // newResult.push(peoples[i])
    // const newPeoples =peoples.slice(i+1)
    // choujiang(peoples, newResult,1, 3)
    console.log('获奖的', newResult);
    // console.log(result)
    count++
  }
  for (
    let i = 0;
    i < peoples.length;
    i++
  ) {
    const newResult = [].concat(result)
    newResult.push(peoples[i])
    const newPeoples = peoples.slice(
      i + 1
    )
   
    const reaminPeoples = once ? arrayAminusB(peoples, newResult) : newPeoples
    const newSelectNumber =
      selectNumber + 1
    choujiang(
      reaminPeoples,
      newResult,
      newSelectNumber,
      award,
      false
    )
  }
}

function getPeople() {
  const peoples = []
  for (let i = 1; i <= 5; i++) {
    peoples.push(i)
  }
  return peoples
}

const peoples = getPeople()

choujiang(peoples, [], 0, 1,true)
console.log(count)
