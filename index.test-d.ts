import { expectType } from 'tsd'
import pads from '.'

expectType<string>(pads('test!', 4, 'center'))
expectType<string>(pads('test!', 2, 'left', ' ', { reverseAlignment: true }))
expectType<string>(pads('test!', 2, 'right', { reverseAlignment: true }))