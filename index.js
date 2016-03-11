bitcore = require("bitcore")
addressRoot = "1" + "MVGPushups"
var padded = addressRoot + Array(34 + 1 - addressRoot.length).join('X');
var hash160 = bitcore.encoding.Base58.decode(padded).slice(1, 21);
var address = new bitcore.Address(hash160);
console.log(address);
