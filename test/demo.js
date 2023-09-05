const pads = require('..')
const str = 'test!'

const res = [
    pads(str, 7, 'left'),
    pads(str, 4, 'right'),
    pads(str, 6, 'center'),
    pads(str, 8, 'center', '-')
]

res.forEach(str => console.log('\'' + str + '\''))