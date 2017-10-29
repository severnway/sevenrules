/**
 * @file Validate against rule 1.
 * @module sevenrules/rule1
 */

'use strict'

// Imports
var re = require('./re')

/**
 * Validate a commit message against rule 1.
 * @param {string} message - The commit message.
 * @return {boolean}
 *     Whether the message satisfies rule 1.
 */
exports.validate = function validate (message) {
  var lines = message.split(re.lineBreak)
  if (lines.length < 2) return true
  if (lines[1].length > 0) return false
  return true
}
