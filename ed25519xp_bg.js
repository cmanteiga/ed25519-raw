
const path = require('path').join(__dirname, 'ed25519xp_bg.wasm');
const bytes = require('fs').readFileSync(path);
let imports = {};
imports['./ed25519xp.js'] = require('./ed25519xp.js');

const wasmModule = new WebAssembly.Module(bytes);
const wasmInstance = new WebAssembly.Instance(wasmModule, imports);
module.exports = wasmInstance.exports;
