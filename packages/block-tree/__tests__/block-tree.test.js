'use strict';

const blockTree = require('..');
const assert = require('assert').strict;

assert.strictEqual(blockTree(), 'Hello from blockTree');
console.info('blockTree tests passed');
