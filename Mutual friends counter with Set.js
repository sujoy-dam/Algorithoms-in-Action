const USER_COUNT = 50000;
let usersA = [];
let usersB = [];

const createUser = (id) => ({ id: `user_${id}`, name: `User ${id}` });

for (let i = 0; i < USER_COUNT; i++) {
  usersA.push(createUser(i));
  usersB.push(createUser(i + 25000));
}
// console.log(usersA)
// console.log(usersB)
const commonFriendsSlow=(usersA, usersB)=>{
  const startTime = performance.now()
  const commonFriends = []
  usersA.forEach(userA=>{
    usersB.forEach(userB=>{
      if(userA.id === userB.id){
        commonFriends.push(userB)
      }
    })
  })
  const endTime = performance.now()
  return {count: commonFriends.length, timeTookToFinish: endTime - startTime}
}
const result = commonFriendsSlow(usersA, usersB)
// console.log(result)

const commonFriendsFast=(usersA, usersB)=>{
  const startTime = performance.now()
  const commonFriends = []

const idList = new Set(usersA.map(userA=>userA.id))


    usersB.forEach(userB=>{
      if(idList.has(userB.id)){
        commonFriends.push(userB)
      }
    })
  const endTime = performance.now()
  return {count: commonFriends.length, timeTookToFinish: endTime - startTime}
}
const result2 = commonFriendsFast(usersA, usersB)
console.log(result2)