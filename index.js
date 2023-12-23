'use strict'

const repeatString = require('n-string')
const { ceil, floor } = Math

/** Simple function that adds padding to a given string. */
module.exports = function (str, length, align = 'left', char = ' ', options = {}) {
    if (typeof str !== 'string') {
        throw new TypeError(`Expected \`input\` to be a \`string\`, received ${typeof str}`)
    }

    if (length <= 0) return str

    // This might be removed in the next major update, most likely moving `char` to `options`.
    if (typeof char === 'object') {
        options = char
        char = ' '
    }

    // reverse alignment
    if (options.reverseAlignment && align !== 'center') align = align === 'left' ? 'right' : 'left'

    if (align === 'left') return repeatString(char, length) + str
    if (align === 'right') return str + repeatString(char, length)
    if (align === 'center') return repeatString(char, floor(length / 2)) + str + repeatString(char, ceil(length / 2))
}