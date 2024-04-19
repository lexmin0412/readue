'use strict';

const blockPackages = require('..');
const assert = require('assert').strict;

assert.strictEqual(blockPackages(), 'Hello from blockPackages');
console.info('blockPackages tests passed');
