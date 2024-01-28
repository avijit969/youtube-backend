import bcyrpt from "bcryptjs"

console.log(await bcyrpt.hash("avijit",8))
console.log(await bcyrpt.compare("avijit","$2a$08$J8g3Z8OapHJfWGtRv.oDHO.PN8m21KvIzN2Bgsn7nYyzG.uuq4Ydi"))