'use strict';
const
  os = require('os'),
  ifaces = os.networkInterfaces();


exports.getMac = function (opts) {
  let info = exports.getInfo(opts)
  return info ? info.mac : info
}

exports.getMask = function (opts) {
  let info = exports.getInfo(opts)
  return info ? info.netmmask : info
}

exports.getIP = function (opts) {
  let info = exports.getInfo(opts)
  return info ? info.address : info
}

exports.getInfo = function (opts) {
  let ip
  opts = opts || {}

  opts.family = opts.family || 'IPv4'
  opts.iface = opts.iface || 'en0'

  for (let aIface in ifaces) {
    if (ifaces.hasOwnProperty(aIface)) {

      if (aIface !== opts.iface) continue;

      for (let i=0; i < ifaces[opts.iface].length; i++) {

        let info = ifaces[opts.iface][i]

        if (info.family === opts.family) return info
      }      
    }
  }
  return undefined
}

exports.getAll = function () {
  return ifaces  
}