// create a site footer component

import { FC } from 'react';

import { getPrefixCls } from '../../common';

// eslint-disable-next-line @typescript-eslint/ban-types
export type SiteFooterProps = {};

export const SiteFooter: FC<SiteFooterProps> = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={`${getPrefixCls('footer-content')}`}>
      <div className={`${getPrefixCls('copyright')}`}>
        <p>Open-source MIT Licensed | Copyright © {currentYear}</p>
        <p>
          Powered by <span>Casts Design</span>
        </p>
      </div>
    </div>
  );
};
