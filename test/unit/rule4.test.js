import test from 'ava'
const rule4 = require('../../lib/rule4')

test('accept unterminated subject', t => {
  const message = 'Subject'
  t.true(rule4.validate(message))
})

test('reject terminated subject', t => {
  const message = 'Subject.'
  t.false(rule4.validate(message))
})
