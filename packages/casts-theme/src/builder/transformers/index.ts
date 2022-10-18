import { Transform } from 'style-dictionary';
import { colorAlpha } from './color-alpha';
import { colorCss } from './color-css';
import { shadowCss } from './shadow-css';

export const transformers: Record<string, Transform> = {
  colorAlpha: {
    type: 'value',
    // only transforms that have transitive: true will be applied to tokens
    // that alias/reference other tokens
    transitive: true,
    matcher: (token) => token.attributes?.category === 'color' && token.alpha,
    transformer: colorAlpha,
  },
  colorCss: {
    type: 'value',
    // only transforms that have transitive: true will be applied to tokens
    // that alias/reference other tokens
    transitive: true,
    matcher: (token) => token.attributes?.category === 'color',
    transformer: colorCss,
  },
  shadowCss: {
    type: 'value',
    // only transforms that have transitive: true will be applied to tokens
    // that alias/reference other tokens
    transitive: true,
    matcher: (token) => token.attributes?.category === 'shadow',
    transformer: shadowCss,
  },
};

export const styleTransformGroup = [
  'attribute/cti',
  'name/cti/kebab',
  'time/seconds',
  'content/icon',
  'colorAlpha',
  'colorCss',
  'shadowCss',
];
