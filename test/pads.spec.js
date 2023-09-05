const { test } = require('uvu')
const { equal } = require('uvu/assert')

const pads = require('..')
const str = 'test!'

test('test string padding', () => {
    equal(pads(str, 7, 'left'), '       test!')
    equal(pads(str, 4, 'right'), 'test!    ')
    equal(pads(str, 4, 'right', { reverseAlignment: true }), '    test!')
    equal(pads(str, 6, 'center'), '   test!   ')
    equal(pads(str, 8, 'center', '-'), '----test!----')
    equal(pads(str, 3, 'left', '+', { reverseAlignment: true }), 'test!+++')
})

test.run()