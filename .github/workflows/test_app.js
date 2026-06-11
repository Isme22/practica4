const assert = require('assert');
const saludo = require('./hola');

assert.strictEqual(saludo(), 'Hola Mundo');

console.log('✅ Prueba unitaria aprobada');
