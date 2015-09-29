"use strict"

// module Data.Forge

var forge = require('node-forge');

exports.sha256 = function(message) {
  forge.md.sha256.create().update(message).digest();
}

