/**
 * Where to put the padding.
 */
export declare type PaddingAlignment = 'left' | 'center' | 'right'

/**
 * Simple function that adds padding to a given string.
 * 
 * @param {String} str - The string to add padding to.
 * @param {Number} length - Amount of padding.
 * @param {PaddingAlignment} align - Padding alignment with *right* by default (`left` | `center` | `right`).
 * @param {String} char - Character used to fill the gap.
 * @returns {String} The string with padding.
 * 
 * @example
 * ```js
 * const pads = require('pads');
 * 
 * pads('test!', 7, 'left');
 * pads('test!', 4, 'right');
 * pads('test!', 6, 'center');
 * pads('test!', 8, 'center', '-');
 * 
 * // <= '       test!'
 * // <= 'test!    '
 * // <= '   test!   '
 * // <= '----test!----'
 * ```
 */
declare function pads(str: string, length: number, align: PaddingAlignment, char?: string): string

export = pads