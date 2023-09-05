'use strict'

const repeatString = require('n-string')
const { ceil, floor } = Math

/**
 * Simple function that adds padding to a given string.
 */
module.exports = function (str, length, align = 'left', char = ' ') {
    if (typeof str !== 'string') {
        throw new TypeError(`Expected \`input\` to be a \`string\`, received ${typeof str}`)
    }

    if (length <= 0) return str

    if (align === 'left') return repeatString(char, length) + str
    if (align === 'right') return str + repeatString(char, length)
    if (align === 'center') return repeatString(char, floor(length / 2)) + str + repeatString(char, ceil(length / 2))
}