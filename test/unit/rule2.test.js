import test from 'ava'
var rule2 = require('../../lib/rule2')

test('accept under 50 characters', t => {
  const message = 'X'.repeat(20)
  t.true(rule2.validate(message))
})

test('accept 50 characters', t => {
  const message = 'X'.repeat(50)
  t.true(rule2.validate(message))
})

test('accept over 50 under 72 characters', t => {
  const message = 'X'.repeat(60)
  t.true(rule2.validate(message))
})

test('accept 72 characters', t => {
  const message = 'X'.repeat(72)
  t.true(rule2.validate(message))
})

test('reject over 72 characters', t => {
  const message = 'X'.repeat(73)
  t.false(rule2.validate(message))
})
