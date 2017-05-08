'use strict'
const test = require('tape')
const deepResolveFrom = require('.')

test('deepResolveFrom()', t => {
  const resolved = deepResolveFrom(process.cwd(), ['mos', 'chalk', './package.json'])
  t.equal(require(resolved).name, 'chalk')

  t.throws(() => deepResolveFrom(process.cwd(), ['nonexistent']), Error)

  t.end()
})

test('deepResolveFrom.silent()', t => {
  const resolved = deepResolveFrom.silent(process.cwd(), ['mos', 'chalk', './package.json'])
  t.equal(require(resolved).name, 'chalk')

  t.equal(deepResolveFrom.silent(process.cwd(), ['nonexistent']), null)

  t.end()
})
