'use strict';

const blockTechstack = require('..');
const assert = require('assert').strict;

assert.strictEqual(blockTechstack(), 'Hello from blockTechstack');
console.info('blockTechstack tests passed');
