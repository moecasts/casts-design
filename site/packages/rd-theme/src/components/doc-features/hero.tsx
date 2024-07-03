import { FC, useCallback } from 'react';
import { Button } from '@casts/button';
import { BaseComponentProps } from '@casts/common';
import { Col, Row } from '@casts/grid';
import { useRd } from '@casts/rd-vite/client';
import { fallbackLocaleCode } from '@casts/rd-vite/common';
import { Space } from '@casts/space';

// @ts-ignore svgr component
import { ReactComponent as Favicon } from '../../../../../src/assets/favicon.svg';
// @ts-ignore svgr component
import { ReactComponent as HomeBanner } from '../../../../../src/assets/home-banner.svg';
import { prefixCls } from '../../common/constants';

export const Hero: FC<BaseComponentProps> = () => {
  const { matches, localeCode } = useRd();

  const currentRoute = matches?.[matches.length - 1].route;

  const meta = currentRoute?.meta;

  const getLocaleLink = useCallback(
    (link: string | undefined) => {
      if (!link) {
        return;
      }

      if (localeCode === fallbackLocaleCode) {
        return link;
      }

      return `/${localeCode}${link}`;
    },
    [localeCode],
  );

  if (!meta?.hero) {
    return null;
  }

  return (
    <Row gutter={24} className={`${prefixCls}-banner-container`} align="middle">
      <div className={`${prefixCls}-banner-bg`}>
        <HomeBanner />
      </div>
      <Col
        medium={14}
        small={24}
        xsmall={24}
        className={`${prefixCls}-banner-content`}
      >
        <h1 className={`${prefixCls}-banner-hero`}>{meta.hero.title}</h1>
        <h2 className={`${prefixCls}-banner-description`}>{meta.hero.desc}</h2>
        {meta.hero.actions && (
          <Space
            className={`${prefixCls}-banner-actions`}
            style={{ justifyContent: 'center' }}
          >
            {meta.hero.actions.map((action: any) => (
              <Button
                size="large"
                key={action.text}
                href={getLocaleLink(action.link)}
                variant={action.variant}
                theme={action.theme}
              >
                {action.text}
              </Button>
            ))}
          </Space>
        )}
      </Col>
      <Col medium={10} small={24} xsmall={24}>
        <div className={`${prefixCls}-banner-image-container`}>
          <Favicon className={`${prefixCls}-banner-logo`} />
        </div>
      </Col>
    </Row>
  );
};
