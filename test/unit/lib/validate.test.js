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
const validate = require('../../../lib/validate')

// Ignored dummy message
const dummyMessage = 'Message'

test.beforeEach(t => {
  rule1.validate.returns(true)
  rule2.validate.returns(true)
  rule3.validate.returns(true)
  rule4.validate.returns(true)
  rule6.validate.returns(true)
})

test.serial('rule 1 violation fails', t => {
  rule1.validate.returns(false)
  t.false(validate(dummyMessage))
})

test.serial('rule 2 violation fails', t => {
  rule2.validate.returns(false)
  t.false(validate(dummyMessage))
})

test.serial('rule 3 violation fails', t => {
  rule3.validate.returns(false)
  t.false(validate(dummyMessage))
})

test.serial('rule 4 violation fails', t => {
  rule4.validate.returns(false)
  t.false(validate(dummyMessage))
})

test.serial('rule 6 violation fails', t => {
  rule6.validate.returns(false)
  t.false(validate(dummyMessage))
})

test.serial('all rules satisfied passes', t => {
  t.true(validate(dummyMessage))
})
