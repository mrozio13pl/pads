declare namespace pads {
    /**
     * Where to put the padding.
     */
    type PaddingAlignment = 'left' | 'center' | 'right'
    /**
     * Options.
     */
    type PaddingOptions = {
        /**
         * Whether to reverse the alignment. Default is `false`.
         */
        readonly reverseAlignment?: boolean
    }
}

declare const pads: {
    /**
     * Simple function that adds padding to a given string.
     * 
     * @param {String} str - The string to add padding to.
     * @param {Number} length - Amount of padding.
     * @param {pads.PaddingAlignment} align - Padding alignment with *left* by default (`left` | `center` | `right`).
     * @param {String} char - Character used to fill the gap.
     * @param {pads.PaddingOptions} options - Options.
     * @returns {String} The string with padding.
     * 
     * @example
     * ```js
     * const pads = require('pads');
     * 
     * pads('test!', 7, 'left');
     * pads('test!', 4, 'right');
     * pads('test!', 4, 'right', { reverseAlignment: true });
     * pads('test!', 6, 'center');
     * pads('test!', 8, 'center', '-');
     * pads('test!', 3, 'left', '+', { reverseAlignment: true });
     * 
     * // <= '       test!'
     * // <= 'test!    '
     * // <= '    test!'
     * // <= '   test!   '
     * // <= '----test!----'
     * // <= 'test!+++'
     * ```
     */
    (str: string, length: number, align?: pads.PaddingAlignment, char?: string, options?: pads.PaddingOptions): string
    (str: string, length: number, align?: pads.PaddingAlignment, options?: pads.PaddingOptions): string
}

export = pads