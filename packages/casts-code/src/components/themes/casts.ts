import {
  TokenCdsColorPaletteInfo500,
  TokenCdsColorPaletteWarning400,
  TokenCdsColorSurfaceNeutralDefault,
  TokenCdsColorTextBrandDefault,
  TokenCdsColorTextDangerDefault,
  TokenCdsColorTextDangerHover,
  TokenCdsColorTextPrimary,
  TokenCdsColorTextSuccessDefault,
  TokenCdsColorTextTertiary,
  TokenCdsColorTextWarningDefault,
} from '@casts/theme';
import { type PrismTheme } from 'prism-react-renderer';

export const prismCastsTheme: PrismTheme = {
  plain: {
    color: TokenCdsColorTextPrimary,
    backgroundColor: TokenCdsColorSurfaceNeutralDefault,
  },
  styles: [
    {
      types: ['prolog', 'constant', 'builtin'],
      style: {
        color: TokenCdsColorPaletteWarning400,
      },
    },
    {
      types: ['inserted', 'function'],
      style: {
        color: TokenCdsColorTextDangerHover,
      },
    },
    {
      types: ['deleted'],
      style: {
        color: TokenCdsColorTextDangerDefault,
      },
    },
    {
      types: ['changed'],
      style: {
        color: TokenCdsColorTextSuccessDefault,
      },
    },
    {
      types: ['punctuation', 'symbol'],
      style: {
        color: TokenCdsColorTextPrimary,
      },
    },
    {
      types: ['string', 'char'],
      style: {
        color: TokenCdsColorTextDangerHover,
      },
    },
    {
      types: ['tag', 'selector'],
      style: {
        color: TokenCdsColorTextWarningDefault,
      },
    },
    {
      types: ['keyword', 'variable'],
      style: {
        color: TokenCdsColorTextBrandDefault,
        fontStyle: 'italic',
      },
    },
    {
      types: ['comment'],
      style: {
        color: TokenCdsColorTextTertiary,
      },
    },
    {
      types: ['attr-name'],
      style: {
        color: TokenCdsColorPaletteInfo500,
      },
    },
  ],
};
