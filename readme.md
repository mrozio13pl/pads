# pads

> Simple function that adds padding to a given string.

## Install

```bash
npm i pads
```

## Usage

```js
const pads = require('pads');

pads('test!', 7, 'left');
pads('test!', 4, 'right');
pads('test!', 6, 'center');
pads('test!', 8, 'center', '-');

// <= '       test!'
// <= 'test!    '
// <= '   test!   '
// <= '----test!----'
```

### pads (str, length, align?, char?)

Adds padding to the string.

#### str

Type: `string`

The string to add padding to.

#### length

Type: `number`

Amount of padding.

#### align

Type: `string`

Padding alignment. Default is `right`.

Alignments:
- `left`
- `center`
- `right`

#### char

Type: `string`

String to fill the gap. Default is `' '` (empty space).

## License

MIT