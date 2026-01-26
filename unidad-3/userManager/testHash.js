password = '12345';
notPassword = '54321';
yesPassword = '12345';
const crypto = require('crypto');

const hash = crypto.createHash('sha256');
hash.update(password);
let passHash = hash.digest('hex');
console.log(password);
console.log(passHash);
const hash2 = crypto.createHash('sha256');
hash2.update(notPassword);
let notPassHash = hash2.digest('hex');
console.log(notPassHash);
const hash3 = crypto.createHash('sha256');
hash3.update(yesPassword);
let yesPassHash = hash3.digest('hex');
 console.log(yesPassHash);

/* prints:
 (base) hgalbarini@192 userManager % node testHash.js
12345
5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5
20f3765880a5c269b747e1e906054a4b4a3a991259f1e16b5dde4742cec2319a
5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5
(base) hgalbarini@192 userManager %  */