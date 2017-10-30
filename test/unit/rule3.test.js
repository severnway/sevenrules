import test from 'ava'
var rule3 = require('../../lib/rule3')

test('accept capitalized subject', t => {
  var message = 'Subject'
  t.true(rule3.validate(message))
})

test('reject uncapitalized subject', t => {
  var message = 'subject'
  t.false(rule3.validate(message))
})
