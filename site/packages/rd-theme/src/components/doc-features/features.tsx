import { FC } from 'react';
import { BaseComponentProps } from '@casts/common';
import { useRd } from '@casts/rd-vite/client';

import { prefixCls } from '../../common/constants';

export const Features: FC<BaseComponentProps> = () => {
  const { matches } = useRd();

  const currentRoute = matches?.[matches.length - 1].route;

  const meta = (currentRoute as any)?.meta || {};

  if (!meta?.features) {
    return null;
  }

  return (
    <div className={`${prefixCls}-features-container`}>
      {/** @ts-ignore custom route */}
      {meta.features.map((feature) => (
        <div className={`${prefixCls}-feature-card`} key={feature.title}>
          <div className={`${prefixCls}-feature-card-icon`}>{feature.icon}</div>
          <div className={`${prefixCls}-feature-card-title`}>
            {feature.title}
          </div>
          <div className={`${prefixCls}-feature-card-content`}>
            {feature.desc}
          </div>
        </div>
      ))}
    </div>
  );
};
