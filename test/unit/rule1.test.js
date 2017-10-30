import test from 'ava'
var rule1 = require('../../lib/rule1')

test('accept no body', t => {
  const message = 'Subject line'
  t.true(rule1.validate(message))
})

test('accept single line break', t => {
  const message = 'Subject line\n'
  t.true(rule1.validate(message))
})

test('accept double line break', t => {
  const message = 'Subject line\n\n'
  t.true(rule1.validate(message))
})

test('reject unseparated', t => {
  const message = 'Subject line\nBody'
  t.false(rule1.validate(message))
})
