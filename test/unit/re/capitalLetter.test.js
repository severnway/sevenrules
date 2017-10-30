import test from 'ava'
const re = require('../../../lib/re')

test('accept capital', t => {
  const capital = 'A'
  t.not(capital.match(re.capitalLetter), null)
})

test('miss lowercase', t => {
  const lowercase = 'a'
  t.is(lowercase.match(re.capitalLetter), null)
})
