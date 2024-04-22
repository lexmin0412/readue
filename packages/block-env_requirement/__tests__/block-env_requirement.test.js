'use strict';

const blockEnvRequirement = require('..');
const assert = require('assert').strict;

assert.strictEqual(blockEnvRequirement(), 'Hello from blockEnvRequirement');
console.info('blockEnvRequirement tests passed');
