'use strict';

const blockBaseInfo = require('..');
const assert = require('assert').strict;

assert.strictEqual(blockBaseInfo(), 'Hello from blockBaseInfo');
console.info('blockBaseInfo tests passed');
