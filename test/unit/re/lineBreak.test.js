import test from 'ava'
const re = require('../../../lib/re')

test('match CR', t => {
  const CR = '\u{D}'
  t.not(CR.match(re.lineBreak), null)
})

test('match LF', t => {
  const LF = '\u{A}'
  t.not(LF.match(re.lineBreak), null)
})

test('match CRLF', t => {
  const CRLF = '\u{D}\u{A}'
  t.not(CRLF.match(re.lineBreak), null)
})

test('miss letter', t => {
  const letter = 'a'
  t.is(letter.match(re.lineBreak), null)
})
