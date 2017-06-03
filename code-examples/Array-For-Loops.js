var usernames = ['Anna', 'Bernhard', 'Christian']

console.log(usernames[1]) // "Bernhard"

for (var i = 0; i < usernames.length; i++) {
  console.log(usernames[i])
}
// "Anna"
// "Bernhard"
// "Christian"

usernames[1] = 'Timo'
usernames.push('Franz')

for (let name of usernames) {
  console.log(name)
}

// "Anna"
// "Timo"
// "Christian"
// "Franz"
