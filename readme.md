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
pads('test!', 4, 'right', { reverseAlignment: true });
pads('test!', 6, 'center');
pads('test!', 8, 'center', '-');
pads('test!', 3, 'left', '+', { reverseAlignment: true });

// <= '       test!'
// <= 'test!    '
// <= '    test!'
// <= '   test!   '
// <= '----test!----'
// <= 'test!+++'
```

### pads (str, length, align?, char? | options?, options?)

Adds padding to the string.

#### str

Type: `string`<br>
The string to add padding to.

#### length

Type: `number`<br>
Amount of padding.

#### align

Type: `string`<br>
Padding alignment. Default is `left`.

Alignments:
- `left`
- `center`
- `right`

#### char

Type: `string`<br>
String to fill the gap. Default is `' '` (empty space).

#### options

Type: `object`

##### reverseAlignment

Type: `boolean`<br>
Default: `false`

Inverts the alignment, e.g., `left` -> `right`.

## License

MIT