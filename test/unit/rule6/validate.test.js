import test from 'ava'
const rule6 = require('../../../lib/rule6')

function accept (t, message) {
  t.true(rule6.validate(message))
}

function reject (t, message) {
  t.false(rule6.validate(message))
}

test('accept wrapped body', accept,
  'Subject\n\n' + 'x'.repeat(20))

test('reject unwrapped body', reject,
  'Subject\n\n' + 'x'.repeat(100))
