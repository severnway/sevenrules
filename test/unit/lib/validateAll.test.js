import test from 'ava'
const sinon = require('sinon')
const mockRequire = require('mock-require')

// Stubbed modules
const rule1 = { validate: sinon.stub() }
const rule2 = { validate: sinon.stub() }
const rule3 = { validate: sinon.stub() }
const rule4 = { validate: sinon.stub() }
const rule6 = { validate: sinon.stub() }
mockRequire('../../../lib/rule1', rule1)
mockRequire('../../../lib/rule2', rule2)
mockRequire('../../../lib/rule3', rule3)
mockRequire('../../../lib/rule4', rule4)
mockRequire('../../../lib/rule6', rule6)

// SUT with fixtures
const validateAll = require('../../../lib/validateAll')

// Ignored dummy message
const dummyMessage = 'Message'

test.before(t => {
  rule1.validate.returns(true)
  rule2.validate.returns(true)
  rule3.validate.returns(true)
  rule4.validate.returns(true)
  rule6.validate.returns(true)
})

test.serial('rule 1 pass reported', t => {
  rule1.validate.returns(true)
  const results = validateAll(dummyMessage)
  t.true(results[1])
})

test.serial('rule 1 fail reported', t => {
  rule1.validate.returns(false)
  const results = validateAll(dummyMessage)
  t.false(results[1])
})

test.serial('rule 2 pass reported', t => {
  rule2.validate.returns(true)
  const results = validateAll(dummyMessage)
  t.true(results[2])
})

test.serial('rule 2 fail reported', t => {
  rule2.validate.returns(false)
  const results = validateAll(dummyMessage)
  t.false(results[2])
})

test.serial('rule 3 pass reported', t => {
  rule3.validate.returns(true)
  const results = validateAll(dummyMessage)
  t.true(results[3])
})

test.serial('rule 3 fail reported', t => {
  rule3.validate.returns(false)
  const results = validateAll(dummyMessage)
  t.false(results[3])
})

test.serial('rule 4 pass reported', t => {
  rule4.validate.returns(true)
  const results = validateAll(dummyMessage)
  t.true(results[4])
})

test.serial('rule 4 fail reported', t => {
  rule4.validate.returns(false)
  const results = validateAll(dummyMessage)
  t.false(results[4])
})

test.serial('rule 6 pass reported', t => {
  rule6.validate.returns(true)
  const results = validateAll(dummyMessage)
  t.true(results[6])
})

test.serial('rule 6 fail reported', t => {
  rule6.validate.returns(false)
  const results = validateAll(dummyMessage)
  t.false(results[6])
})
