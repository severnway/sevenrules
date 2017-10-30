import test from 'ava'
const rule3 = require('../../../lib/rule3')

test('accept capitalized subject', t => {
  const message = 'Subject'
  t.true(rule3.validate(message))
})

test('reject uncapitalized subject', t => {
  const message = 'subject'
  t.false(rule3.validate(message))
})
