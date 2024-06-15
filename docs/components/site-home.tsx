import { Button } from '@casts/button';
import { Col, Row } from '@casts/grid';
import { Space } from '@casts/space';

// @ts-ignore svgr component
import { ReactComponent as Favicon } from '../../site/public/favicon.svg';

import './site-home.scss';

const prefixCls = 'rd';

export const SiteHome = () => {
  const bannerContainerClasses = `${prefixCls}-banner-container`;
  const bannerContentClasses = `${prefixCls}-banner-content`;

  return (
    <>
      <Row gutter={24} className={bannerContainerClasses} align="middle">
        <Col
          medium={14}
          small={24}
          xsmall={24}
          className={bannerContentClasses}
        >
          <h1 className={`${prefixCls}-banner-hero`}>Casts Design</h1>
          <h2 className={`${prefixCls}-banner-description`}>
            Modern and easily extensible component libraries
          </h2>
          <Space
            className={`${prefixCls}-banner-actions`}
            style={{ justifyContent: 'center' }}
          >
            <Button size="large">Get Started</Button>
            {/* <Button size="large" theme="neutral"> */}
            {/*   Github */}
            {/* </Button> */}
          </Space>
        </Col>
        <Col medium={10} small={24} xsmall={24}>
          <div className={`${prefixCls}-banner-image-container`}>
            <Favicon className={`${prefixCls}-banner-logo`} />
          </div>
        </Col>
      </Row>
      <div className={`${prefixCls}-features-container`}>
        <div className={`${prefixCls}-feature-card`}>
          <div className={`${prefixCls}-feature-card-icon`}>🎨</div>
          <div className={`${prefixCls}-feature-card-title`}>Themeable</div>
          <div className={`${prefixCls}-feature-card-content`}>
            Since it is developed based on css variables and scss, so you can
            easily customize the theme.
          </div>
        </div>
        <div className={`${prefixCls}-feature-card`}>
          <div className={`${prefixCls}-feature-card-icon`}>🛠️</div>
          <div className={`${prefixCls}-feature-card-title`}>Extensible</div>
          <div className={`${prefixCls}-feature-card-content`}>
            Provides Component and react hook , so you can implement your own UI
            based on react hook.
          </div>
        </div>
        <div className={`${prefixCls}-feature-card`}>
          <div className={`${prefixCls}-feature-card-icon`}>⚛️</div>
          <div className={`${prefixCls}-feature-card-title`}>Atomic</div>
          <div className={`${prefixCls}-feature-card-content`}>
            Divided into multiple packages, so you can install only the ones you
            want. That is, you can control the version of a particular package.
          </div>
        </div>
      </div>
    </>
  );
};
