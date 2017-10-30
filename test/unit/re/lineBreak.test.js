import test from 'ava'
const re = require('../../../lib/re')

function match (t, text) {
  t.not(text.match(re.lineBreak), null)
}

function miss (t, text) {
  t.is(text.match(re.lineBreak), null)
}

test('match CR', match, '\u{D}')
test('match LF', match, '\u{A}')
test('match CRLF', match, '\u{D}\u{A}')

test('miss letter', miss, 'a')
