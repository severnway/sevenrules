import test from 'ava'
const re = require('../../../lib/re')

function match (t, text) {
  t.not(text.match(re.period), null)
}

function miss (t, text) {
  t.is(text.match(re.period), null)
}

test('match period', match, '.')
test('miss letter', miss, 'a')
