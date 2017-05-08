'use strict'
const deepResolveFrom = require('.')

console.log(deepResolveFrom(process.cwd(), ['mos', 'chalk', './package.json']))
