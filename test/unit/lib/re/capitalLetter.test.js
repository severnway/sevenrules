import test from 'ava'
const re = require('../../../../lib/re')

function match (t, text) {
  t.not(text.match(re.capitalLetter), null)
}

function miss (t, text) {
  t.is(text.match(re.capitalLetter), null)
}

test('match capital', match, 'A')

test('miss lowercase', miss, 'a')
