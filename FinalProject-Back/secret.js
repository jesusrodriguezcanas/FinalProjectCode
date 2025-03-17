const crypto = require('crypto');

const secret = 'Primera palabra';
const secret2 = 'Actualizo primera palabra1';

const hash = crypto.createHmac('sha256', secret).update(secret2).digest("hex");

console.log(hash);