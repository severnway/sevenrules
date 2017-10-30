import test from 'ava'
const rule6 = require('../../../lib/rule6')

test('accept wrapped body', t => {
  const line = 'x'.repeat(20)
  const body = line + '\n' + line
  const message = 'Subject\n\n' + body
  t.true(rule6.validate(message))
})

test('reject unwrapped body', t => {
  const line = 'x'.repeat(100)
  const body = line + '\n' + line
  const message = 'Subject\n\n' + body
  t.false(rule6.validate(message))
})
