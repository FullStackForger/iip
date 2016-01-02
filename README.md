# iip - Tiny local IP library

Interface IP is tiny library with few helper methods returning taking `opt` as parameter and returning simple interface information.

`opts` param is an object with two propeties: 
- `family` - should be either 'IPv4' or 'IPv6'
- `iface` - should be one of the available interfaces, eg: 'lo0', 'en0'

Not passing `opts` param into helper will result in default values
```
{ family: 'IPv4', iface: 'en0' }
```

### `getInfo(opts)`
Returns info object from the interface.

```
console.log(iip.getInfo())
console.log(iip.getInfo({ family: 'IPv4', iface: 'en0' }))
```

### `getIP(opts)`
Returns local interface address.

```
console.log(iip.getIP({ family: 'IPv4', iface: 'en0' }))
console.log(iip.getIP())
console.log(iip.getInfo().address)
```

### `getIP(opts)`
Returns interface mac address.
```
console.log(iip.getMac({ family: 'IPv6' }))
console.log(iip.getMac())
```

### `getIP(opts)`
Returns interface mac netmask.
```
console.log(iip.getMask({ family: 'IPv6' }))
console.log(iip.getMask())
```


### `getAll()`
Returns all interface
```
console.log(iip.getAll())
```

equivalent to
```
require('os').networkInterfaces();
```
