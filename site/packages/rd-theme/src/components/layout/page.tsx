import { FC } from 'react';
import { BaseComponentProps } from '@casts/common';

import { getPrefixCls } from '../../common';
import { Features } from '../doc-features/features';
import { Hero } from '../doc-features/hero';
import { Routes } from './routes';

import '../styles/page.scss';

export const SitePage: FC<BaseComponentProps> = () => {
  return (
    <div className={`${getPrefixCls('page')}`}>
      <Hero />
      <Features />
      <Routes />
    </div>
  );
};
