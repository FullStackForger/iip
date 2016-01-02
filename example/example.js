const iip = require('../')

console.log(iip.getInfo())


console.log(iip.getIP({ family: 'IPv4', iface: 'en0' }))
console.log(iip.getIP())
console.log(iip.getInfo().address)

console.log(iip.getMac({ family: 'IPv6' }))
console.log(iip.getMac())

console.log(iip.getIP({ family: 'IPv6', iface: 'lo0'}))


console.log(iip.getAll())