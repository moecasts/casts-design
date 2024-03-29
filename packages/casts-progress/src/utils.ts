import { ReactNode } from 'react';

export type FormatFunction = (percent?: number) => ReactNode;
export const defaultFormat: FormatFunction = (percent = 0) => `${percent}%`;
