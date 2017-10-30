import test from 'ava'
const re = require('../../../lib/re')

test('match period', t => {
  const period = '.'
  t.not(period.match(re.period), null)
})

test('miss letter', t => {
  const letter = 'a'
  t.is(letter.match(re.period), null)
})
