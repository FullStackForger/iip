'use strict';
const
  os = require('os'),
  ifaces = os.networkInterfaces();

function getIP(iface) {
  let ip;

  for (let aIface in ifaces) {
    if (ifaces.hasOwnProperty(aIface)) {

      if (iface && aIface !== iface) continue;

      for (let i=0; i < ifaces[iface].length; i++) {

        let info = ifaces[iface][i]

        if (info.family === 'IPv4') return info.address
      }      
    }
  }
}

module.exports = getIP;