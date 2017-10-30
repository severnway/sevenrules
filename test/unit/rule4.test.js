import test from 'ava'
var rule4 = require('../../lib/rule4')

test('accept unterminated subject', t => {
  var message = 'Subject'
  t.true(rule4.validate(message))
})

test('reject terminated subject', t => {
  var message = 'Subject.'
  t.false(rule4.validate(message))
})
