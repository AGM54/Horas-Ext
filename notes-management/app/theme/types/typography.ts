import type { Colors } from "./colors";

type fontWeight = 'light'
                  | 'regular'
                  | 'medium'
                  | 'semibold'
                  | 'bold'
                  | 'normal'
                  | '100'
                  | '200'
                  | '300'
                  | '400'
                  | '500'
                  | '600'
                  | '700'
                  | '800'
                  | '900'

export interface Font {
    color : keyof Colors
    fontWeight: fontWeight
    fontSize: number
    letterSpacing: number
    lineHeight?: number
}

export interface Typography {
    H1: Font
    H2: Font
    H3: Font
    H4: Font
    H5: Font

    body_large: Font
    body_medium: Font
    body: Font
    body_small: Font
}