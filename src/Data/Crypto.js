"use strict"

// module Data.Crypto

var forge = require('node-forge');

exports.sha1 = function(message) { 
  return forge.md.sha1.create().update(message).digest().toHex(); 
}

exports.sha256 = function(message) { 
  return forge.md.sha256.create().update(message).digest().toHex(); 
}

exports.sha384 = function(message) { 
  return forge.md.sha384.create().update(message).digest().toHex(); 
}

exports.sha512 = function(message) { 
  return forge.md.sha512.create().update(message).digest().toHex(); 
}

exports.md5 = function(message) { 
  return forge.md.md5.create().update(message).digest().toHex(); 
}

exports.hmac = function(message) { 
  return forge.md.hmac.create().update(message).digest().toHex(); 
}

